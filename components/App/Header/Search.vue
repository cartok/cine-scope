<!-- TODO: a11y checks -->

<template>
  <button class="g-button g-button-square" @click.stop="toggleIsOpen">
    <MagnifyingGlassIcon class="g-icon g-icon-fixed-24" />
  </button>
  <Teleport to="body">
    <div v-if="isOpen" class="g-modal g-modal-layout-main">
      <div ref="modalContentElementRef" class="g-modal-content">
        <div
          :class="{
            'g-modal-content-header': true,
            'no-results': !movies.length,
          }"
        >
          <input
            ref="inputElementRef"
            v-model="query"
            placeholder="Search for movie titles"
          />
        </div>
        <div v-if="movies.length" class="g-modal-content-body">
          <ul class="movies">
            <li v-for="(movie, index) in movies" :key="movie.id">
              <NuxtLink
                :ref="(el) => (movieLinkRefs[index] = el as HTMLLIElement)"
                class="movie"
                :to="`/movie/${movie.id}`"
                @click="isOpen = false"
              >
                <h5 class="movie-title g-text-title g-text-title-small">
                  {{ movie.title }}
                </h5>
                <p class="movie-description g-text-body g-text-body-small">
                  {{ movie.overview }}
                </p>
                <p class="movie-year g-text-label g-text-label-normal">
                  {{ new Date(movie.release_date).toLocaleDateString() }}
                </p>
                <img
                  v-if="movie.poster_path"
                  class="movie-thumbnail"
                  :src="useTmdbImageUrl(movie.poster_path, thumbnailWidthToken)"
                  :alt="`Image of movie ${movie.title}, released ${movie.release_date}`"
                  :width="thumbnailWidth"
                />
                <div v-else class="movie-thumbnail-placeholder" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

// Helper for rendering list items
const thumbnailWidth = 154 // TODO: Should be typed according to the available options
const thumbnailWidthPx = `${thumbnailWidth}px`
const thumbnailWidthToken = `w${thumbnailWidth}`
function useTmdbImageUrl(filePath: string, width: string) {
  return `https://image.tmdb.org/t/p/${width}` + filePath
}

// Configure basic modal toggle
const isOpen = ref(false)
function toggleIsOpen() {
  isOpen.value = !isOpen.value
}
const modalContentElementRef = ref<HTMLElement | null>(null)
const onClickOutside = useOnClickOutside(modalContentElementRef, () => {
  if (!isOpen.value) {
    return
  }
  isOpen.value = false
})
watch(modalContentElementRef, (element) => {
  if (element) {
    window.removeEventListener('click', onClickOutside)
    window.addEventListener('click', onClickOutside)
  } else {
    window.removeEventListener('click', onClickOutside)
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('click', onClickOutside)
})

// Configure list update
const query = ref('')
const debouncedQuery = useDebounce(query, 750)
const { data } = useLazyFetch('/api/search/movie', {
  immediate: false,
  query: {
    query: debouncedQuery,
    page: 1,
  },
  watch: [debouncedQuery],
})
const movies = computed(() => data.value?.results || [])

// Configure keybindings
const { ArrowDown, ArrowUp, Escape } = useMagicKeys()
const inputElementRef = ref<HTMLInputElement>()
useMagicKeys({
  passive: false,
  onEventFired(e) {
    // TODO: Somehow the event is prevented even if `!e.shiftKey` prevents executing it.
    if (e.ctrlKey && e.key === 'k' && e.type === 'keydown' && !e.shiftKey) {
      e.preventDefault()
      toggleIsOpen()
    }
  },
})
watch(isOpen, async (value, oldValue) => {
  if (oldValue === false) {
    await nextTick()
    inputElementRef.value!.focus()
  } else {
    inputElementRef.value!.blur()
    query.value = ''
  }
})
watch(Escape, () => {
  isOpen.value = false
})

const movieLinkRefs = ref<HTMLAnchorElement[]>([])
watch(ArrowDown, (value) => {
  // TODO: Die `useMagicKeys` lösung nützt mir hier nichts wenn ich nicht default preventen kann (scroll)?
  console.log('ArrowDown', value)
  if (!value || !movieLinkRefs.value.length) {
    return
  }

  const firstMovieLink = movieLinkRefs.value[0]
  const activeElement = import.meta.server
    ? null
    : (document.activeElement as HTMLElement)
  const activeMovieLink = movieLinkRefs.value.find(
    (listElement) => listElement === activeElement,
  )

  const nextMovieLink =
    (activeMovieLink?.nextElementSibling as HTMLAnchorElement) || firstMovieLink

  console.log('firstMovieLink:', firstMovieLink)
  console.log('activeMovieLink:', activeMovieLink)
  console.log('nextMovieLink:', nextMovieLink)
  // TODO: Hier stimmt was nicht...
  nextMovieLink.focus()
})
watch(ArrowUp, (value) => {
  console.log('ArrowUp', value)
  if (!movieLinkRefs.value) {
    return
  }
})
</script>

<style scoped lang="scss">
.no-results {
  border-radius: var(--modal-border-radius);
}

.movies {
  display: grid;
  gap: var(--space-3);
  max-height: 700px;
  overflow-y: scroll;
}

.movie {
  height: 231px; // Thumnail height
  box-sizing: content-box;
  display: grid;
  grid-template-areas:
    'title year thumbnail'
    'description description thumbnail';
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto v-bind(thumbnailWidthPx);
  gap: var(--space-8);
  background-color: var(--color-primary-200);
  border-radius: 10px;
  padding: var(--space-4);
}

.movie-title {
  grid-area: title;
  color: var(--color-secondary-700);
}

.movie-year {
  grid-area: year;
}

.movie-description {
  grid-area: description;
  @include mixins.truncate(4);
}

.movie-thumbnail {
  grid-area: thumbnail;
  border-radius: 10px;
  border: 2px solid white;
}

.movie-thumbnail-placeholder {
  grid-area: thumbnail;
}
</style>

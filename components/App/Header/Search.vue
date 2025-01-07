<!-- TODO: add keybinding ctrl + k (open close) -->
<!-- TODO: add keybinding esc (close) -->
<!-- TODO: add keybinding up and down arrow (keyboard list navigation) -->
<!-- TODO: a11y checks -->

<template>
  <button class="g-button g-button-square" @click.stop="toggleIsOpen">
    <MagnifyingGlassIcon class="g-icon g-icon-fixed-24" />
  </button>
  <Teleport to="body">
    <div v-if="isOpen" class="g-modal g-modal-layout-main">
      <div ref="modalContentRef" class="g-modal-content">
        <div
          :class="{
            'g-modal-content-header': true,
            'no-results': !movies.length,
          }"
        >
          <input ref="input" v-model="query" placeholder="Search for movie titles" />
        </div>
        <div v-if="movies.length" class="g-modal-content-body">
          <ul class="movies">
            <li v-for="movie in movies" :key="movie.id" class="movie">
              <h5 class="movie-title">{{ movie.title }}</h5>
              <p class="movie-description">{{ movie.overview }}</p>
              <img
                v-if="movie.poster_path"
                class="movie-thumbnail"
                :src="createPosterThumbnailUrl(movie.poster_path)"
                :alt="`Image of movie ${movie.title}, released ${movie.release_date}`"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

function toggleIsOpen() {
  isOpen.value = !isOpen.value
}

function createPosterThumbnailUrl(posterPath: string) {
  return `https://image.tmdb.org/t/p/w92` + posterPath
}

const isOpen = ref(false)
const modalContentRef = ref<HTMLElement | null>(null)
const onClickOutside = useOnClickOutside(modalContentRef, () => {
  if (!isOpen.value) {
    return
  }
  isOpen.value = false
})
watch(modalContentRef, (element) => {
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

const query = ref('')
const debouncedQuery = useDebounce(query, 750)
const { data } = useLazyFetch('/api/search/movie', {
  immediate: false,
  query: {
    query: query.value,
    page: 1,
  },
  watch: [debouncedQuery],
})
const movies = computed(() => data.value?.results || [])
watch(movies, () => console.log('movies changed', movies))

const { ArrowDown, ArrowUp, Escape } = useMagicKeys()
const input = ref<HTMLInputElement>()
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
    input.value!.focus()
  } else {
    input.value!.blur()
    query.value = ''
  }
})
watch(Escape, () => {
  isOpen.value = false
})
watch(ArrowDown, (value) => {
  // TODO: Add functionallity once list renders.
  console.log('ArrowDown', value)
})
watch(ArrowUp, (value) => {
  // TODO: Add functionallity once list renders.
  console.log('ArrowUp', value)
})
</script>

<style scoped lang="scss">
.no-results {
  border-radius: var(--modal-border-radius);
}

.movies {
  display: grid;
  gap: var(--space-2);
}

.movie {
  display: grid;
  grid-template-areas:
    'title year thumbnail'
    'description description description';
  grid-template-rows: auto auto; /* hier muss ich noch beide restricten und fallback image brauch ich auch oder ich zeige nichts an ja ist besser, wegen cls muss ihc aber vermutlich die höhe restricten */
  grid-template-columns: 1fr auto auto; /* hier noch den letzten restricten aber erstmal das image angeuckn */
}

.movie-title {
  grid-area: title;
}

.movie-year {
  grid-area: year;
  font-size: var(--font-ps-2);
  font-feature-settings: 'wght' var(--font-pw-2);
  color: var(--color-neutral-500);
}

.movie-description {
  grid-area: description;
  font-size: var(--font-ps-2);
  font-feature-settings: 'wght' var(--font-pw-2);
  color: var(--color-neutral-500);
  @include mixins.truncate(2);
}

.movie-thumbnail {
  grid-area: thumbnail;
}
</style>

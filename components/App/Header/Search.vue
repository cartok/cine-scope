<template>
  <button class="g-button g-button-square">
    <MagnifyingGlassIcon class="g-icon g-icon-fixed-24" @click="isOpen = !isOpen" />
  </button>
  <!-- <Teleport to="body">
    <div v-if="isOpen" class="g-modal g-modal-layout-main">
      <div ref="modalContentRef" class="g-modal-content">
        <div
          :class="{
            'g-modal-content-header': true,
            'no-results': !filteredMovies.length,
          }"
        >
          <input v-model="query" placeholder="Search for movie titles" />
        </div>
        <div v-if="filteredMovies.length" class="g-modal-content-body">
          <div>
            <div v-for="movie in filteredMovies" :key="movie.id" :value="movie">
              {{ movie.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport> -->
</template>

<script lang="ts" setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

// TODO: Should definetly create a modal component.
const isOpen = ref(false)
const modalContentRef = ref<HTMLDivElement | null>(null)

// TODO: fix warning and functioniallity. maybe just without destroy or move code into component.
// useOnClickOutsideOf(modalContentRef, () => (isOpen.value = !isOpen.value))
// watch(modalContentRef, (element) => {
//   if (element) {
//     useOnClickOutsideOf(modalContentRef, close)
//   }
// })

// TODO: List component and request code below...

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type SearchMovieResponse = {
  page: number
  results: SearchMovieResponseItem[]
  total_pages: 2
  total_results: 24
}

type SearchMovieResponseItem = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string // ja|de|en...
  original_title: string
  overview: string
  popularity: 11.479
  poster_path: string
  release_date: string // "2000-11-18" -> transform to date
  title: string
  video: boolean
  vote_average: number // 6.7
  vote_count: number
}

type SearchMovieResponseItemMock = {
  id: number
  title: string
}

const movies: SearchMovieResponseItemMock[] = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'The Grand Budapest Hotel' },
  { id: 3, title: 'Interstellar' },
  { id: 3, title: 'Interstellar 2' },
  { id: 4, title: 'Mad Max: Fury Road' },
  { id: 5, title: 'Parasite' },
]
const query = ref('')
const filteredMovies = computed(() =>
  !query.value
    ? []
    : movies.filter((movie) => {
        return movie.title.toLowerCase().includes(query.value.toLowerCase())
      }),
)
</script>

<style scoped>
.no-results {
  border-radius: var(--modal-border-radius);
}
</style>

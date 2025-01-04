<template>
  <button class="g-button-square">
    <MagnifyingGlassIcon class="g-icon-fixed-24" @click="open" />
  </button>
  <Dialog ref="modalRef" :open="isOpen" @close="close">
    <div class="search">
      <p>
        Aliquam varius, metus eu ullamcorper gravida, ligula tortor mollis sem, maximus
        feugiat massa est ut ligula. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Sed porttitor volutpat nibh. Aliquam vitae ante
        a augue scelerisque fringilla pellentesque vel nunc. Quisque non enim leo. Nam
        semper lectus vel mauris laoreet rutrum. Proin eu ipsum ornare, interdum ex a,
        luctus tellus. Sed aliquet sem turpis, ac lobortis dui gravida sit amet. Nam
        gravida placerat ultrices. Morbi non arcu magna. Phasellus molestie condimentum
        dui, at gravida felis condimentum at. Etiam euismod, ante ut congue eleifend, orci
        orci commodo elit, sed dictum metus turpis vitae nulla. Duis rhoncus augue enim, a
        hendrerit ipsum feugiat tempus. Quisque ac dui viverra, dictum nisl quis,
        scelerisque ipsum.
      </p>
      <Combobox v-model="selectedMovie">
        <ComboboxInput @change="query = $event.target.value" />
        <ComboboxOptions>
          <ComboboxOption v-for="movie in filteredMovies" :key="movie.id" :value="movie">
            {{ movie.title }}
          </ComboboxOption>
        </ComboboxOptions>
      </Combobox>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

const isOpen = ref(true)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

const modalRef = ref()

useOnClickOutsideOf(modalRef, close)

// LIST

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
const selectedMovie = ref(null)
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
.search {
  display: grid;
  grid-auto-flow: column;
  background-color: var(--color-bg);
  color: var(--color-fg);
}

.icon {
  height: 24px;
  cursor: pointer;
  color: orange;

  &:hover {
    color: var(--color-primary-500);
  }
}
</style>

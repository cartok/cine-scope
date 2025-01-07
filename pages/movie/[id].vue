<template>
  <div>
    <section class="section">
      <NuxtImg
        v-if="data?.poster_path"
        preload
        :src="useTmdbImageUrl(data!.poster_path, 'w500')"
      />
      <div v-else />
      <header class="g-typography">
        <h1 class="g-text-title g-text-title-large">{{ data?.title }}</h1>
        <p class="g-text-body g-text-body-large">{{ data?.overview }}</p>
      </header>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch(`/api/movie-details/${route.params.id}`)
console.log('movie:', data.value)

// TODO: Handle page load errors in middleware and create a error page - something?
// const router = useRouter()
// if (!data.value || error.value) {
//   showError('No data. Will return to index page in 3s.')
//   if (!import.meta.server) {
//     setTimeout(() => {
//       router.replace({ path: '/' })
//     }, 3000)
//   }
// }
</script>

<style scoped>
.section {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 500px auto;
  gap: var(--space-10);
}
</style>

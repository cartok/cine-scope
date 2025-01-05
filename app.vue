<template>
  <ul ref="skipLinks" class="skip-links">
    <li>
      <a href="#nav">Skip to navigation</a>
      <a href="#main">Skip to main content</a>
    </li>
  </ul>
  <div class="g-icon-fixed-16"></div>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const skipLinks = ref()

onMounted(() => {
  skipLinks.value.firstChild.focus()
})

watch(
  () => route.path,
  () => {
    skipLinks.value.firstChild.focus()
  },
)
</script>

<style scoped>
.skip-links {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}
</style>

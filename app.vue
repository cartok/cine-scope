<template>
  <NuxtLayout>
    <ul ref="skipLinks" class="skip-links">
      <li>
        <a href="#nav">Skip to navigation</a>
        <a href="#main">Skip to main content</a>
      </li>
    </ul>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// TOOD: Does not help, got to fix the font flashs -> Download and compress fonts... serve static.
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    {
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght,GRAD,YTAS,YTFI,YTLC,YTUC@8..144,-10..0,25..151,100..1000,97,649..854,715,416..570,528..760&display=block',
      rel: 'stylesheet',
    },
    {
      rel: 'preload',
      as: 'font',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,slnt,wdth,wght,GRAD,YTAS,YTFI,YTLC,YTUC@8..144,-10..0,25..151,100..1000,97,649..854,715,416..570,528..760&display=block',
    },
  ],
})

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

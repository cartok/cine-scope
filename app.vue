<template>
  <div ref="rootRef" style="visibility: hidden">
    <NuxtLayout>
      <ul ref="skipLinks" class="skip-links">
        <li>
          <a href="#nav">Skip to navigation</a>
          <a href="#main">Skip to main content</a>
        </li>
      </ul>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// Load fonts.
const rootRef = ref<HTMLElement>()
onMounted(async () => {
  try {
    const fonts = await Promise.all(
      [
        new FontFace('Teko', 'url(/fonts/teko.woff2)'),
        new FontFace('Roboto Flex', 'url(/fonts/roboto-flex.woff2)'),
      ].map((font) => font.load()),
    )
    fonts.forEach((font) => {
      document.fonts.add(font)
    })
  } catch (error) {
    console.error(error)
    throw showError(`Could not load fonts`)
  }

  if (!rootRef.value) throw showError('Root element was not available')

  rootRef.value.removeAttribute('style')
})

// Configure skip links.
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

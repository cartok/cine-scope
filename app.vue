<template>
  <ul class="fixed opacity-0 pointer-events-none">
    <li>
      <a ref="skipLink" href="#main" class="skip-link">Skip to main content</a>
    </li>
  </ul>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const skipLink = ref()

watch(
  () => route.path,
  () => {
    skipLink.value.focus()
  },
)

onMounted(() => {
  skipLink.value.focus()
})
</script>

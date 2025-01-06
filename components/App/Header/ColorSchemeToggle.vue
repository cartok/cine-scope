<!-- 
  TODO: The switch is not fully working yet, compare with chrome dev-tools scheme switch.
  TODO: There are solutions I should consider using instead:
        - https://vueuse.org/core/useDark/
        - https://vueuse.org/core/usePreferredColorScheme/
        - https://vueuse.org/core/usePreferredContrast/
-->
<template>
  <button class="g-button g-button-square">
    <component :is="icon" class="g-icon g-icon-fixed-24" @click="toggleColorScheme" />
  </button>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import type { FunctionalComponent } from 'vue'
import { toggleColorScheme, useColorScheme } from '~/composables/state/useColorScheme'

const colorScheme = useColorScheme()
const contraryIcon: Record<typeof colorScheme.value, FunctionalComponent> = {
  light: MoonIcon,
  dark: SunIcon,
}

const icon = computed(() => contraryIcon[colorScheme.value])
</script>

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

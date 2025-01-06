<!-- Should propably create it in Figma instead. -->

<template>
  <h1 class="items">
    <span class="cine">
      <span class="c">C</span>
      <span class="ine">ine</span>
    </span>
    <span class="scpe">Sc<MagnifyingGlassCircleIcon class="g-icon" />pe</span>
  </h1>
</template>

<script lang="ts" setup>
import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
.items {
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
}

.cine {
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 4px;
}

.c {
  font-family: Monoton;
  font-size: 68px;
}

.ine {
  font-family: Monoton;
  font-size: 50px;
}

.scpe {
  font-family: Aldrich;
  margin-top: 8px;
  font-size: 50px;
  display: grid;
  grid-auto-flow: column;
}
</style>

<template>
  <form action="/search-by-title" method="get" autocomplete="on">
    <input type="text" name="query" aria-label="Search movie by title" />
    <button type="submit"><MagnifyingGlassIcon /></button>
  </form>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>

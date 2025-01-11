<template>
  <nav class="navigation">
    <ul class="list">
      <li>
        <NuxtLink
          class="g-link g-link-text"
          to="/filter"
          exact-active-class="g-link-text-active"
        >
          Filter
        </NuxtLink>
      </li>
      <div class="separator" />
      <li>
        <NuxtLink
          class="g-link g-link-text"
          exact-active-class="g-link-text-active"
          to="/discover"
        >
          Discover
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// TODO: Finish
// const routeMatchesPath = useRouteMatchesPath()
</script>

<style>
.list {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  font-size: var(--font-ps-5);
  white-space: nowrap;
}

.separator {
  width: 2px;
  height: 100%;
  background-color: var(--color-primary-500);
}
</style>

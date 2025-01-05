<template>
  <nav class="navigation">
    <ul class="list">
      <li class="item">
        <NuxtLink class="g-link" to="/">Explore</NuxtLink>
      </li>
      <div class="separator" />
      <li>
        <NuxtLink to="/filter">Filter</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.list {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  font-size: var(--font-ps-5);
}

.separator {
  width: 2px;
  height: 100%;
  background-color: var(--color-primary-500);
}
</style>

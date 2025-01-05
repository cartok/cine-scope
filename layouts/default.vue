<template>
  <div>
    <AppHeader />
    <main id="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
#main {
  display: grid;
  padding: var(--space-10);
}
</style>

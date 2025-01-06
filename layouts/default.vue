<template>
  <div class="layout">
    <AppHeader class="header" />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style>
:root {
  --layout-header-height: 130px;
  --layout-header-max-width: 900px;
  --layout-content-max-width: 1200px;
}
</style>

<style>
:root {
  --page-padding-x-desktop: var(--space-10);
  --page-padding-bottom-desktop: var(--space-20);
}
</style>

<style scoped>
.layout {
  display: grid;
  min-height: 100vh;
  grid-template-areas: 'header' 'main';
  grid-template-rows: var(--layout-header-height) 1fr;
}

.header {
  grid-area: header;

  padding: 0px var(--page-padding-x-desktop);
  background-color: var(--color-bg);
}

.main {
  grid-area: main;

  display: grid;
  grid-template-columns: minmax(auto, var(--layout-content-max-width));
  justify-content: center;
  padding: var(--space-16) var(--page-padding-x-desktop)
    var(--page-padding-bottom-desktop);
  background-color: var(--color-bg);
}
</style>

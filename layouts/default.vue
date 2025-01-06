<template>
  <div class="layout">
    <AppHeader class="header" />
    <main class="main">
      <slot />
    </main>
    <AppFooter class="footer" />
  </div>
</template>

<style>
:root {
  --layout-content-max-width: 1200px;
  --page-padding-x-desktop: var(--space-10);
  --page-padding-bottom-desktop: var(--space-20);
}
</style>

<style scoped>
.layout {
  display: grid;
  min-height: 100vh;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: auto 1fr auto;
}

.header {
  grid-area: header;
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

.footer {
  grid-area: footer;
}
</style>

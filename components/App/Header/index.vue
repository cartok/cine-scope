<template>
  <header class="header">
    <div class="content">
      <NuxtImg src="/logo.svg" alt="Cine Scope Logo" height="68" preload />
      <AppHeaderNavigation />
      <div class="actions">
        <AppHeaderSearch />
        <AppHeaderColorSchemeToggle />
      </div>
    </div>
  </header>
</template>

<style>
:root {
  --layout-header-height: 130px;
  --layout-header-max-width: 900px;
}
</style>

<style scoped>
.header {
  border-bottom: 1px solid var(--color-primary-500);
  height: var(--layout-header-height);
  padding: 0px var(--page-padding-x-desktop);
  background-color: var(--color-bg);
}

.content {
  height: 100%;
  display: grid;
  gap: var(--space-4);

  margin: 0 auto;
  max-width: var(--layout-header-max-width);

  grid-auto-flow: column;
  grid-auto-columns: auto;
  justify-content: space-between;
  align-items: center;
  font-variant: var(--font-ps-4);
}

.actions {
  display: grid;
  grid-auto-flow: column;
  gap: var(--space-2);
  justify-content: end;
}
</style>

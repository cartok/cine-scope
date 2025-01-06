<template>
  <header class="header">
    <div class="content">
      <AppHeaderLogo />
      <AppHeaderNavigation />
      <div class="actions">
        <AppHeaderSearch />
        <AppHeaderColorSchemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-primary-500);
}

.content {
  display: grid;
  margin: 0 auto;
  max-width: 900px;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  font-variant: var(--font-ps-4);
}

.actions {
  display: grid;
  grid-auto-flow: column;
  gap: var(--space-1);
}
</style>

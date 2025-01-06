<template>
  <footer class="footer">
    <div class="content">
      <aside class="tmdb-attribution">
        <span class="tmdb-notice">
          This product uses the TMDB API but is not endorsed or certified by
        </span>
        <NuxtImg
          class="tmdb-logo"
          alt="TMDB Logo as API usage requirement"
          format="svg"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          preload
          width="75"
        />
      </aside>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  grid-area: footer;
  height: 200px;
  border-top: 1px solid var(--color-secondary-500);
  padding: var(--space-4) var(--page-padding-x-desktop);
  background-color: var(--color-bg);
}

.content {
  display: grid;
  gap: var(--space-5);

  margin: 0 auto;
  max-width: var(--layout-header-max-width);

  grid-template-areas: '. .' '. tmdb';
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr auto;
}

.tmdb-attribution {
  grid-area: tmdb;

  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  align-items: center;
  gap: var(--space-1);
}

.tmdb-notice {
  font-size: var(--font-ps-3);
  font-feature-settings: 'wght' var(--font-pw-1);
  color: var(--color-fg);
}
</style>

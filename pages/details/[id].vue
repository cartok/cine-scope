<template>
  <div>
    <section>
      <header>
        <h1>DETAILS PAGE CONTENT</h1>
      </header>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// TODO: A semantic url (title) would be better but what about meta data?
//       A id seems just simpler to implement.
console.log('will request movie data for:', route.params.id)
</script>

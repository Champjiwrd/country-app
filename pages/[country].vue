<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold">I like {{ country }}</h1>
    <p>Welcome to the page about {{ country }}!</p>
  </div>
</template>
<script setup>
const route = useRoute();
const country = route.params.country;

useHead({
  title: `title from ${country} [country] page`,
  meta: [
    { name: 'description', content: `description from ${country} [country] ` },
  ],
});
</script>

<style scoped>
/* Add any custom styling here */
</style>

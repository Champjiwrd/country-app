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
  title: `I like ${country.charAt(0).toUpperCase() + country.slice(1)}`,
  meta: [{ name: 'description', content: `description ${country}` }],
});
</script>

<style scoped>
/* Add any custom styling here */
</style>

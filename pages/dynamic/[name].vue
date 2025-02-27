<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold">{{ name }}</h1>
    <p>Welcome to the page about {{ name }}!</p>
  </div>
</template>
<script setup>
const route = useRoute();
const name = route.params.name;

useHead({
  title: `title from ${name} [name] page`,
  meta: [{ name: 'description', content: `description from ${name} [name] ` }],
});
</script>

<style scoped>
/* Add any custom styling here */
</style>

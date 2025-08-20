<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold">{{ name }}</h1>
    <p>Welcome to the page about {{ name }}!</p>
  </div>
</template>
<script setup>
const name = 'test'

useHead({
  title: 'title from test use name',
  meta: [{ name: 'description', content: 'description from name page [name]' }],
});
</script>

<style scoped>
/* Add any custom styling here */
</style>

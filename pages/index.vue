<template>
  <div>index {{ title }}</div>
</template>

<script setup>
const route = useRoute();
const title = route.query.test ? `Title from index ${route.query.test}` : `Title from index page only`
useHead({
  title,
  meta: [{ name: 'description', content: `description from index page` }],
});
</script>

<style></style>

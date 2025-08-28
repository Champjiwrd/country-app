<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold">{{ name }}</h1>
    <p>Welcome to the page about {{ name }}!</p>
  </div>
</template>
<script setup>
const route = useRoute();
const name = route.params.name;
// defineRouteRules({
//   prerender: true,
// });
// useHead({
//   title: name ? `title from ${name} [name] page` : 'title from [name] page but cannot use name',
//   meta: [{ name: 'description', content: name? `description from ${name} [name] ` : 'description from name but connot use name' }],
// });
// useSeoMeta({
//   title: () => name ? `seo meta: title from ${name} [name] page` : 'title from [name] page but cannot use name',
//   description: () => name? `seo meta: description from ${name} [name] ` : 'description from name but connot use name' ,
//   ogTitle: () => name ? `seo meta: title from ${name} [name] page` : 'title from [name] page but cannot use name',
//   ogDescription: () => name? `seo meta: og:description from ${name} [name] ` : 'description from name but connot use name' ,
// });
useSeoMeta({
  title: `${name} แปลว่าอะไร ดูความหมาย ตัวอย่างประโยค หมายความว่า พจนานุกรม Longdo Dictionary แปลภาษา คำศัพท์`,
  ogTitle: `คำศัพท์ ${name} แปลว่าอะไร`,
  ogType: 'article',
  // ogUrl: `${currentDictUrl}search/${encodeURIComponent(search.value)}`,
  // ogDescription: 'ดูความหมายที่พจนานุกรมลองดู Longdo Dictionary',
});
</script>

<style scoped>
/* Add any custom styling here */
</style>

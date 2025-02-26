// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  compatibilityDate: '2024-11-01',
  router: {
    base: '/country-app/', // Replace with your repository name
  },
  devtools: { enabled: true },
  routeRules: {
    '/**': { static: true }, // Ensure all pages are static
  },
});

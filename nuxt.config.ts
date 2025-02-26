// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/country-app/',
  },
  devtools: { enabled: true },
  routeRules: {
    '/**': { static: true }, // Ensure all pages are static
  },
});

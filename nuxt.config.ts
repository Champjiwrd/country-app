// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/country-app/',
    head: {
      title: 'Title from nuxt.config',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
        },
        {
          name: 'description',
          content: 'description from nuxt.config',
        },
      ],
    },
  },
  devtools: { enabled: true },
  ssr: true,
});

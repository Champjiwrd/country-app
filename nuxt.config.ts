// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/country-app/',
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
        },
        {
          name: 'description',
          content:
            'ทายแผนที่ต่าง ๆ และทดสอบความรู้ภูมิศาสตร์ของคุณ! เกมสนุก ๆ ที่จะช่วยคุณจำแผนที่ได้ดียิ่งขึ้น',
        },
      ],
    },
  },
  devtools: { enabled: true },
  routeRules: {
    '/**': { static: true }, // Ensure all pages are static
  },
});

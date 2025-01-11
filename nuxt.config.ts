import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-01',
  modules: ['@nuxt/eslint', '@vueuse/nuxt', '@nuxt/image'],
  devtools: { enabled: false },
  nitro: {
    vercel: {
      regions: ['fra1'],
    },
  },
  runtimeConfig: {
    public: {
      apis: {
        tmdb: {
          imageBaseUrl: '',
          baseUrl: '',
        },
      },
    },
    apis: {
      tmdb: {
        key: '',
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // TODO: Configure and test CSS purging.
          additionalData: `
            @use "~/assets/css/base/texts.css" as *;
            @use "~/assets/css/mixins/index.scss" as mixins;
          `,
        },
      },
    },
  },
  css: ['~/assets/css/index.css'],
  eslint: {},
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  routeRules: {
    '/': { redirect: '/filter' },
    '/filter': { isr: true },
    '/discover': { prerender: true },
    '/details/**': { static: 3600 },
  },
})

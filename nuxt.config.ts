export default defineNuxtConfig({
  compatibilityDate: '2025-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  eslint: {},
  tailwindcss: {
    config: {
      theme: {
        extend: {},
      },
    },
  },
  routeRules: {
    '/': { prerender: true, redirect: '/filter' },
    '/filter': { isr: true },
    '/details/**': { static: 3600 },
  },
  nitro: {
    vercel: {
      regions: ['fra1'],
    },
  },
})

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts'],
  eslint: {},
  css: ['~/assets/css/index.css'],
  googleFonts: {
    families: {
      Monoton: [400],
      Aldrich: [400],
      Rokkitt: true,
      Teko: true,
      'Roboto Flex': true,
    },
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/filter': { isr: true },
    '/details/**': { static: 3600 },
  },
  nitro: {
    vercel: {
      regions: ['fra1'],
    },
  },
})

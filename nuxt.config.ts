import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-01',
  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxt/image'],
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
  // TODO: Variable Fonts: Es werden nur die 400er font statt variable fonts geladen.
  // Man kann nur weights definieren. Eventuell ist es besser ohne das Modul zu gehen
  // und einfach per CSS zu importieren und preload hints anzulegen.
  googleFonts: {
    preconnect: true,
    prefetch: true,
    preload: true,
    families: {
      // TODO: Create SVG for the banner & remove those fonts
      Monoton: [400], // Logo
      Aldrich: [400], // Logo
      Rokkitt: true,
      Teko: {
        wght: '300..700',
      },
    },
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  routeRules: {
    '/': { redirect: '/scope' },
    '/scope': { isr: true },
    '/discover': { prerender: true },
    '/details/**': { static: 3600 },
  },
})

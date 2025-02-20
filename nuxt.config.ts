// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxtjs/i18n'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  i18n: {
    lazy: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', file: 'english/en-US.json' },
    ],
  },
})

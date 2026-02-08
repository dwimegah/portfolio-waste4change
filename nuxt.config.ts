export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'],

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'id',
    langDir: 'locales/',
    locales: [
      { code: 'id', file: 'id.json' },
      { code: 'en', file: 'en.json' }
    ]
  },

  nitro: {
    preset: 'netlify'
  }
})

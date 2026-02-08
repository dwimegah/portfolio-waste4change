export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'id',
    langDir: '../locales/',
    locales: [
      { code: 'id', file: 'id.json' },
      { code: 'en', file: 'en.json' }
    ]
  }
})

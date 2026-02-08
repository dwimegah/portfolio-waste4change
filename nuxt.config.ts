export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'],

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'id',
    langDir: '../locales/',
    locales: [
      { code: 'id', file: 'id.json' },
      { code: 'en', file: 'en.json' }
    ]
  },

  nitro: {
    preset: 'vercel'
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&family=Asap:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})

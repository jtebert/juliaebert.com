import pkg from './package'

export default {

  generate: {
    fallback: "404.html"
  },

  env: {
    siteTitle: 'Julia Ebert',
    navItems: {
      "About Me": "",
      CV: "cv",
      Research: "research",
      Publications: "publications",
      "Side Projects": "side-projects",
      Media: "media"
    },
    baseURL: 'https://juliaebert.com'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Julia Ebert',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Julia Ebert, apprentice robot herder. PhD candidate at Harvard University researching collective robotics." },
      { name: 'msapplication-TileColor', content: "#03bc25" },
      { name: 'theme-color', content: '#03bc25' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600|Space+Mono' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=OmJMPAq7rX' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png?v=OmJMPAq7rX' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png?v=OmJMPAq7rX' },
      { rel: 'manifest', href: '/site.webmanifest?v=OmJMPAq7rX' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg?v=OmJMPAq7rX', color: '#03bc25' },
      { rel: 'shortcut icon', href: '/favicon.ico?v=OmJMPAq7rX' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#03bc25' },

  /*
  ** Global CSS
  */
  css: [
    'assets/sass/main.scss',
    'assets/sass/texture.scss',
    '@mdi/font/css/materialdesignicons.min.css'

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-typer.js', ssr: false },
    { src: '~/plugins/directives.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-54476418-1'
    }],
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

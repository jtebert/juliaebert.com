module.exports = {


  env: {
    siteTitle: 'Julia Ebert',
    navItems: {
      "About Me": "",
      CV: "cv",
      Research: "research",
      Publications: "publications",
      "Side Projects": "side-projects",
      Media: "media"
    }
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
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
    ],
  },
  css: [
    'assets/sass/main.scss',
    'assets/sass/texture.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#03BC25' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~/plugins/vue-typer.js', ssr: false },
    { src: '~/plugins/directives.js' }
  ],
  modules: [
    // Simple usage
    // ['nuxt-sass-resources-loader', './assets/sass/variables.scss'],
  ]
}
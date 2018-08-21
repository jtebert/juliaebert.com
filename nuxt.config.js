module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'jtebert',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Julia Ebert&apos;s personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600|Share+Tech' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },

    ],
    script: [
      { src: "https://cdn.rawgit.com/pcooksey/bibtex-js/ef59e62c/src/bibtex_js.js" }
    ],
  },
  css: [
    'assets/main.scss'
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
  modules: [
    // Simple usage
    ['nuxt-sass-resources-loader', './assets/main.scss'],
  ]
}
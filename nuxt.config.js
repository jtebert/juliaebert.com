// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Server configuration
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'Julia Ebert',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Julia Ebert, robot herding PhD. Roboticist and software engineer.'
        },
        { name: 'msapplication-TileColor', content: '#03bc25' },
        { name: 'theme-color', content: '#03bc25' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600|Space+Mono'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png?v=OmJMPAq7rX'
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/favicon-32x32.png?v=OmJMPAq7rX'
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/favicon-16x16.png?v=OmJMPAq7rX'
        },
        { rel: 'manifest', href: '/site.webmanifest?v=OmJMPAq7rX' },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg?v=OmJMPAq7rX',
          color: '#03bc25'
        },
        { rel: 'shortcut icon', href: '/favicon.ico?v=OmJMPAq7rX' }
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/sass/main.scss',
    'assets/sass/texture.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/particles.client.js', mode: 'client' }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@tsparticles/vue3']
  },

  // Vite configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "bulma/sass/utilities/_all.sass";'
        }
      }
    },
    server: {
      hmr: {
        protocol: 'ws'
      }
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteTitle: 'Julia Ebert',
      navItems: {
        'About Me': '',
        Resume: 'resume',
        Research: 'research',
        'Side Projects': 'side-projects',
        Publications: 'publications',
      },
      baseURL: 'https://juliaebert.com'
    }
  },

  // Generate configuration
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // Loading bar color
  loading: {
    color: '#03bc25'
  },

  compatibilityDate: '2025-04-21',
})
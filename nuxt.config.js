export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'socialite',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' } // Add this line to import Tailwind CSS using a CDN link
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
        crossorigin: 'anonymous'
      },
      {
        src: 'assets/js/tippy.all.min.js'
      },
      {
        src: 'assets/js/uikit.js'
      },
      {
        src: 'assets/js/simplebar.js'
      },
      {
        src: 'assets/js/custom.js'
      },
      {
        src: 'assets/js/bootstrap-select.min.js'
      },
      {
        src: 'https://unpkg.com/ionicons@5.2.3/dist/ionicons.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/icons.css',
    '~/assets/css/style.css',
    '~/assets/css/uikit.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'greeny-organics',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"preconnect", href:"https://fonts.gstatic.com"},
      { rel: 'stylesheet', type: 'image/x-icon', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Raleway:wght@400;600&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleFonts: {
    download: true,
    families: {
      'Playfair+Display':  [400, 700, 900],
      Raleway: [400, 600]
    }
  }
}

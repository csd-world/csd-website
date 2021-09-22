const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '软件部 - 大学生创新创业综合实践基地',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0' },
      { hid: 'description', name: 'description', content: '桂林电子科技大学创新创业综合实践基地软件部宣传及报名网站' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/index.css',
    '~/assets/icon/iconfont.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/fullpage', mode: 'client' },
    { src: '~/plugins/vee-validate.ts' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-tailvue', { toast: true, toast: { defaults: { containerClasses: [ '!flex-col', '!justify-end' ] } } }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate']
  },

  tailwindcss: {
    configPath: '~~/tailwind.config.js'
  }
}

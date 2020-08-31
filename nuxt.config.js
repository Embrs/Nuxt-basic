import GenLocalesWebpackPlugin from "./tools/js/gen-locales-webpack-plugin";

export default {
  env: {
    VUE_TEST_MODAL: false
  },

  // server: {
  //   port: 8000, // default: 3000
  //   host: "0.0.0.0", // default: localhost,
  //   timing: false
  // },

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: "zh-TW"
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        name: "google",
        content: "notranslate",
        translate: "no"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    bodyAttrs: {
      class: "notranslate"
    }
  },

  /*
   ** Global CSS
   */
  css: [],
  styleResources: {
    scss: ["@/style/_layout.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "@/store",
    "@/plugins/i18n",
    "@/plugins/RESTfulApi",
    "@/plugins/iView",
    "@/plugins/lazyload",
    "@/plugins/lodash",
    "@/plugins/cookie",
    { src: "@/plugins/AOS", ssr: false }
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources"
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseUrl: "http://csofans-gateway.jp.ngrok.io",
    // proxy: true, // 開啟代理
    // prefix: "/api", // 請求 URL 加錢綴
    // credentials: true // 跨域請求是否要憑證
  },
  proxy: {
    "/api": {
      target: "http://csofans-gateway.jp.ngrok.io", // 目標域名
      changeOrigin: true, // 是否跨域
      pathRewrite: {
        "^/api": "/" // 替換
      }
    },
    "/ws": {
      target: "https://csofans-ws-gateway.jp.ngrok.io",
      changeOrigin: true,
      pathRewrite: {
        "^/ws": "/"
      }
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // vendor: ['vue-i18n'],
    extend(config, { isDev }) {
      if (isDev) {
        const dev = [
          new GenLocalesWebpackPlugin({
            path: `./plugins/i18n`,
            target: "locales.json"
          })
        ];
        config.plugins = [...config.plugins, ...dev];
      }
    }
  },

  /**
   * customize nuxt.js router (vue-router)
   */
  router: {
    middleware: ["i18n", "rbac"] // middleware all pages of the application
  },

  loading: {
    color: "#c3d7dc",
    height: "4px"
  }
};

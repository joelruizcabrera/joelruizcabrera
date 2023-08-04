// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@ant-design-vue/nuxt", "@nuxtjs/strapi"],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt"
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: "http://localhost:1337"
      },
    }
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    extends: ["github:Byeto-Company/nuxt-api-layer"],
    modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@vueuse/nuxt"],
});

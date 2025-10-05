import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["../app/assets/dist.css"],
    extends: ["github:Byeto-Company/nuxt-utils-layer", "github:Byeto-Company/nuxt-api-layer", ".."],
    modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@vueuse/nuxt"],
    eslint: {
        config: {
            // Use the generated ESLint config for lint root project as well
            rootDir: fileURLToPath(new URL("..", import.meta.url)),
        },
    },
    authModule: {
        endpoints: {
            develop_token: {
                name: "",
                path: "/user/develop_token",
            },
            logout: {
                name: "",
                path: "/user/logout",
            },
            otp: {
                name: "",
                path: "/user/send_otp",
            },
            profile: {
                name: "",
                path: "/user/profile",
            },
            refresh: {
                name: "",
                path: "/user/token/refresh",
            },
            signin: {
                name: "",
                path: "/user/token",
            },
            update: {
                name: "",
                path: "/user/profile",
            },
            verify: {
                name: "",
                path: "/user/verify",
            },
        },
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
        },
    },
});

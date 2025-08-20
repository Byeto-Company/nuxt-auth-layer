import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
    extends: ["github:Byeto-Company/nuxt-api-layer", ".."],
    modules: ["@nuxt/eslint", "@nuxtjs/i18n"],
    eslint: {
        config: {
            // Use the generated ESLint config for lint root project as well
            rootDir: fileURLToPath(new URL("..", import.meta.url)),
        },
    },
});

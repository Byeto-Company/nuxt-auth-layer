import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    css: ["~/assets/tailwind.css"],
    extends: ["github:Byeto-Company/nuxt-utils-layer", "github:Byeto-Company/nuxt-api-layer", ".."],
    modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@vueuse/nuxt"],
    eslint: {
        config: {
            // Use the generated ESLint config for lint root project as well
            rootDir: fileURLToPath(new URL("..", import.meta.url)),
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});

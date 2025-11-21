import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "url";
import { dirname, resolve } from "pathe";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
    compatibilityDate: "2025-11-21",
    css: [resolve(currentDir, "./app/assets/dist.css")],
});

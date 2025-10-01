import { createResolver, defineNuxtModule, extendPages, useLogger } from "@nuxt/kit";
import { defu } from "defu";
import { addCustomTab } from "@nuxt/devtools-kit";

type ModuleOptions = {
    internalPage: boolean;
    pagePath: string;
    otpCount: number;
    otpTimer: number;
    strategy: "otp" | "credentials";
    endpoints: {
        profile: { path: string; name: string };
        update: { path: string; name: string };
        refresh: { path: string; name: string };
        verify: { path: string; name: string };
        signin: { path: string; name: string };
        logout: { path: string; name: string };
        otp: { path: string; name: string };
        develop_token: { path: string; name: string };
    };
};

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: "auth-module",
        configKey: "authModule",
    },

    defaults: {
        internalPage: true,
        pagePath: "/signin",
        otpCount: 6,
        otpTimer: 60,
        strategy: "otp",
        endpoints: undefined,
    },

    async setup(moduleOptions, nuxt) {
        const resolver = createResolver(import.meta.url);
        const logger = useLogger("auth-layer");

        if (!moduleOptions.endpoints) {
            logger.box("Please provide endpoints of authModule in nuxt.config.ts");
            process.exit(1);
        }

        nuxt.options.runtimeConfig.public.authModule = defu(nuxt.options.runtimeConfig.public.authModule, {
            pagePath: moduleOptions.pagePath,
            otpCount: moduleOptions.otpCount,
            otpTimer: moduleOptions.otpTimer,
            internalPage: moduleOptions.internalPage,
            strategy: moduleOptions.strategy,
            endpoints: moduleOptions.endpoints,
        });

        if (moduleOptions?.internalPage && moduleOptions.pagePath.length > 0) {
            if (moduleOptions.strategy === "otp") {
                extendPages((pages) => {
                    pages.unshift({
                        name: "signin",
                        path: (moduleOptions.pagePath as string) ?? "/signin",
                        file: resolver.resolve("runtime/templates/otp-signin.vue"),
                    });
                });
            } else if (moduleOptions.strategy === "credentials") {
                extendPages((pages) => {
                    pages.unshift({
                        name: "signin",
                        path: (moduleOptions.pagePath as string) ?? "/signin",
                        file: resolver.resolve("runtime/templates/credentials-signin.vue"),
                    });
                });
            }
        }

        extendPages((pages) => {
            pages.unshift({
                name: "devtools-auth-view",
                path: "/devtools-auth-view",
                file: resolver.resolve("runtime/templates/devtools-auth-view.vue"),
            });
        });

        addCustomTab({
            name: "auth-module",
            title: "Auth Module",
            icon: "lucide:lock-keyhole",
            view: {
                type: "iframe",
                src: "/devtools-auth-view",
            },
        });
    },
});

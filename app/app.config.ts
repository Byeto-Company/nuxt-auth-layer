export default defineAppConfig({});

declare global {
    type AccountProfile = unknown;
    type UpdateAccountProfile = unknown;
}

declare module "@nuxt/schema" {
    interface AppConfig {
        appAuth?: {
            unauthorizedEvent?: (error: ApiError) => void;
        };
    }
    interface AppConfigInput {
        appAuth?: {
            unauthorizedEvent?: (errors: ApiError) => void;
        };
    }
}

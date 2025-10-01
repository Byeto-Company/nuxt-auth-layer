export default defineAppConfig({});

declare global {
    type AccountProfile = unknown;
    type UpdateAccountProfile = unknown;
}

declare module "@nuxt/schema" {
    interface AppConfig {
        appAuth?: {
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
            unauthorizedEvent?: (error: ApiError) => void;
        };
    }
    interface AppConfigInput {
        appAuth: {
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
            unauthorizedEvent?: (errors: ApiError) => void;
        };
    }
}

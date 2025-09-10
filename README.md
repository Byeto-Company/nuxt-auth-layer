# Auth Layer Documentation

## Overview

The Auth Layer provides a comprehensive authentication system for the application, including middleware, composables, and a configurable module for managing login and user sessions.

This layer also defines **global account types** that can be overridden by the main application:

```ts
type AccountProfile = unknown;
type UpdateAccountProfile = unknown;
```

These types are used internally in the layer for account-related operations but can be redefined in the main app to suit specific needs.

And this is the app config options:

```ts
{
    authModule?: {
        unauthorizedEvent?: (error: ApiError) => void;
    };
}
```

---

## Installation

```bash
npm i @nuxtjs/i18n @tanstack/vue-query @tanstack/vue-query-devtools @vueuse/integrations @vueuse/nuxt @vueuse/router axios
````

Add these layers to extend in nuxt.config.ts ( also check their dependencies ):

`github:Byeto-Company/nuxt-utils-layer` and `github:Byeto-Company/nuxt-api-layer`

---

## Middlewares

The layer includes the following middlewares:

-   `app/middleware/checkIsLoggedIn.ts`  
    Ensures the user is logged in. Ideal for protecting routes that require authentication.

-   `app/middleware/checkIsNotLoggedIn.ts`  
    Ensures the user is not logged in. Useful for routes like login or signup pages.

---

## Module

The Auth Layer includes a customizable module to configure authentication behavior.

### Module Options

```ts
type ModuleOptions = {
    internalPage: boolean; // Use the internal login page or an external page
    pagePath: string; // Path to the login page
    otpCount: number; // Number of digits for OTP login
    otpTimer: number; // OTP validity period in seconds
    strategy: "otp" | "credentials"; // Authentication strategy to use
};
```

### Default Options

```ts
{
    internalPage: true,
    pagePath: "/signin",
    otpCount: 6,
    otpTimer: 60,
    strategy: "otp",
}
```

### Dynamic Pages

Based on the `internalPage` and `strategy` settings, the module provides dynamic login pages:

-   `modules/auth-module/runtime/templates/credentials-signin.vue`
-   `modules/auth-module/runtime/templates/otp-signin.vue`

---

## Composables

The layer provides the following composables for managing authentication flows:

-   `app/composables/useAuth.ts` — Core composable for managing tokens and login state.
-   `app/composables/useDevelopSignin.ts` — Development helper for signing in users.
-   `app/composables/useGetAccount.ts` — Fetches the current user's account profile.
-   `app/composables/useOtp.ts` — Sends OTP requests to users.
-   `app/composables/useOtpSignIn.ts` — Signs in users using OTP.
-   `app/composables/useRefreshAuth.ts` — Refreshes authentication tokens.
-   `app/composables/useServerSideAuthCheck.ts` — Checks authentication during server-side rendering.
-   `app/composables/useSignOut.ts` — Signs out the current user.
-   `app/composables/useUpdateAccount.ts` — Updates the current user's account profile.
-   `app/composables/useVerify.ts` — Verifies access tokens.

---

## Components

-   `app/components/AuthLayerWrapper.vue` — Wrapper for configurations

---

This layer is designed to provide a consistent, modular, and flexible authentication system for Nuxt applications. Global account types (`AccountProfile` and `UpdateAccountProfile`) are provided with default definitions but can be overridden in the main application to customize account data structures.

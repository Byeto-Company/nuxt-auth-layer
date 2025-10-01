// types

export type RefreshAuthRequest = {
    refresh: string;
};

export type RefreshAuthResponse = {
    access: string;
    refresh: string;
};

/**
 * Composable for refreshing authentication tokens.
 * Wraps `useCreate` with the token refresh API endpoint.
 *
 * @returns {Object} A mutation object from `useCreate` for refreshing tokens
 * @module composables/useRefreshAuth
 */
const useRefreshAuth = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.refresh;
    
    return useCreate<RefreshAuthResponse, RefreshAuthRequest>({
        customResource: endpointResource,
    });
};

export default useRefreshAuth;

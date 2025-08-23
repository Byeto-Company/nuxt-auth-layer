// imports

import { API_ENDPOINTS } from "../constants/api-endpoints";

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
    return useCreate<RefreshAuthResponse, RefreshAuthRequest>({
        customResource: {
            path: API_ENDPOINTS.user.refresh.path,
        },
    });
};

export default useRefreshAuth;
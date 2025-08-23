// imports

import { API_ENDPOINTS } from "../constants/api-endpoints";

// types

export type SignOutRequest = {
    refresh_token: string;
};

/**
 * Composable for signing out a user.
 * Wraps `useCreate` with the logout API endpoint.
 *
 * @returns {Object} A mutation object from `useCreate` for signing out
 * @module composables/useSignOut
 */
const useSignOut = () => {
    return useCreate<unknown, SignOutRequest>({
        customResource: {
            path: API_ENDPOINTS.user.logout.path,
        },
    });
};

export default useSignOut;
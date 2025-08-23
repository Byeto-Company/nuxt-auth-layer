// imports

import { API_ENDPOINTS } from "../constants/api-endpoints";

// types

export type VerifyRequest = {
    token: string;
};

/**
 * Composable for verifying an access token.
 * Wraps `useCreate` with the token verification API endpoint.
 *
 * @returns {Object} A mutation object from `useCreate` for verifying tokens
 * @module composables/useVerify
 */
const useVerify = () => {
    return useCreate<unknown, VerifyRequest>({
        customResource: {
            path: API_ENDPOINTS.user.verify.path,
        },
    });
};

export default useVerify;
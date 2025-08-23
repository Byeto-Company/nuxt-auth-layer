// imports

import { API_ENDPOINTS } from "../constants/api-endpoints";
import useAuth from "./useAuth";

// types

export type GetAccountResponse = AccountProfile;

/**
 * Composable for fetching the current user's account profile.
 * - Uses authentication token from `useAuth`
 * - Only runs when a valid token is available
 *
 * @returns {Object} A query object from `useOne` for fetching account profile
 * @module composables/useGetAccount
 */
const useGetAccount = () => {
    // state

    const { token } = useAuth();

    // computed

    /**
     * Whether the request is enabled.
     * This is a Vue computed ref (boolean).
     * @type {ComputedRef<boolean>}
     */
    const isEnabled = computed(() => {
        return !!token.value;
    });

    // methods

    return useOne<GetAccountResponse>({
        customResource: {
            name: API_ENDPOINTS.user.profile.key,
            path: API_ENDPOINTS.user.profile.path,
        },
        authorization: true,
        queryOptions: {
            enabled: isEnabled,
        },
    });
};

export default useGetAccount;
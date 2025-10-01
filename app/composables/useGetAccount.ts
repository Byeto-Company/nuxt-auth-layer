// imports

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
    
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.profile;

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
        customResource: endpointResource,
        authorization: true,
        queryOptions: {
            enabled: isEnabled,
        },
    });
};

export default useGetAccount;

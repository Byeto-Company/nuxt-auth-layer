// imports

import { API_ENDPOINTS } from "../constants/api-endpoints";

// types

export type UpdateAccountRequest = UpdateAccountProfile;

export type UpdateAccountResponse = AccountProfile;

/**
 * Composable for updating the current user's account profile.
 * Wraps `useUpdate` with the account profile API endpoint.
 *
 * @returns {Object} A mutation object from `useUpdate` for updating account profile
 * @module composables/useUpdateAccount
 */
const useUpdateAccount = () => {
    return useUpdate<UpdateAccountResponse, UpdateAccountRequest>({
        customResource: {
            path: API_ENDPOINTS.user.profile.path,
        },
        contentType: "form",
        authorization: true,
    });
};

export default useUpdateAccount;
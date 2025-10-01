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
    const appConfig = useAppConfig();
    const endpointResource = appConfig.appAuth?.endpoints.update;

    return useUpdate<UpdateAccountResponse, UpdateAccountRequest>({
        customResource: endpointResource,
        contentType: "form",
        authorization: true,
    });
};

export default useUpdateAccount;

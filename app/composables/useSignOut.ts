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
    const appConfig = useAppConfig();
    const endpointResource = appConfig.appAuth?.endpoints.refresh;

    return useCreate<unknown, SignOutRequest>({
        customResource: endpointResource,
    });
};

export default useSignOut;

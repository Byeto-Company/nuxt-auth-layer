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
    const appConfig = useAppConfig();
    const endpointResource = appConfig.appAuth?.endpoints.verify;

    return useCreate<unknown, VerifyRequest>({
        customResource: endpointResource,
    });
};

export default useVerify;

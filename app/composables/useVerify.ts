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
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.verify;

    return useCreate<unknown, VerifyRequest>({
        customResource: endpointResource,
    });
};

export default useVerify;

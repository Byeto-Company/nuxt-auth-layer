// types

export type VerifyRequest = {
    token: string;
};

const useVerify = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.verify;

    return useCreate<unknown, VerifyRequest>({
        customResource: endpointResource,
    });
};

export default useVerify;

// types

export type DevelopSignInRequest = unknown;

export type DevelopSignInResponse = {
    access: string;
    refresh: string;
};

const useDevelopSignin = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.develop_token;

    return useCreate<DevelopSignInResponse, DevelopSignInRequest>({
        customResource: endpointResource,
    });
};

export default useDevelopSignin;

// types

export type SignOutRequest = {
    refresh_token: string;
};

const useSignOut = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.logout;

    return useCreate<unknown, SignOutRequest>({
        authorization : true,
        customResource: endpointResource,
    });
};

export default useSignOut;

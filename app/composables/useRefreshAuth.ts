// types

export type RefreshAuthRequest = {
    refresh: string;
};

export type RefreshAuthResponse = {
    access: string;
    refresh: string;
};

const useRefreshAuth = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.refresh;
    
    return useCreate<RefreshAuthResponse, RefreshAuthRequest>({
        customResource: endpointResource,
    });
};

export default useRefreshAuth;

// types

export type DevelopSignInRequest = unknown;

export type DevelopSignInResponse = {
    access: string;
    refresh: string;
};

const useDevelopSignin = () => {
    const appConfig = useAppConfig();
    const endpointResource = appConfig.appAuth?.endpoints.develop_token;

    return useCreate<DevelopSignInResponse, DevelopSignInRequest>({
        customResource: endpointResource,
    });
};

export default useDevelopSignin;

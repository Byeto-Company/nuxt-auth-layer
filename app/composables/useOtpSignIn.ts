// types

export type OtpSignInRequest = {
    otp: string;
    phone: string;
};

export type OtpSignInResponse = {
    access: string;
    refresh: string;
};

const useOtpSignIn = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.signin;
    
    return useCreate<OtpSignInResponse, OtpSignInRequest>({
        customResource: endpointResource,
    });
};

export default useOtpSignIn;

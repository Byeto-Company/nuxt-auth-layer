

// types

export type OtpRequest = {
    phone: string;
};


const useOtp = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.otp;

    return useCreate<unknown, OtpRequest>({
        customResource: endpointResource,
    });
};

export default useOtp;

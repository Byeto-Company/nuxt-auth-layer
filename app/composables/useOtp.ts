// imports

// types

export type OtpRequest = {
    phone: string;
};

/**
 * Composable for sending OTP (One-Time Password) requests.
 * Wraps `useCreate` with the OTP API endpoint.
 *
 * @returns {Object} A mutation object from `useCreate` for sending OTP requests
 * @module composables/useOtp
 */
const useOtp = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.otp;

    return useCreate<unknown, OtpRequest>({
        customResource: endpointResource,
    });
};

export default useOtp;

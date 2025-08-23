// imports

import { API_ENDPOINTS } from "../constants/api-endpoints";

// types

export type OtpSignInRequest = {
    otp: string;
    phone: string;
};

export type OtpSignInResponse = {
    access: string;
    refresh: string;
};

/**
 * Composable for signing in a user using OTP (One-Time Password).
 * Wraps `useCreate` with the OTP sign-in API endpoint.
 *
 * @returns {Object} A mutation object from `useCreate` for handling OTP sign-in
 * @module composables/useOtpSignin
 */
const useOtpSignIn = () => {
    return useCreate<OtpSignInResponse, OtpSignInRequest>({
        customResource: {
            path: API_ENDPOINTS.user.signin.path,
        },
    });
};

export default useOtpSignIn;
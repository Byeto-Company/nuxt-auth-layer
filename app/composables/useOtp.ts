// imports

import { API_ENDPOINTS } from "../constants/api-endpoints";

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
    return useCreate<unknown, OtpRequest>({
        customResource: {
            path: API_ENDPOINTS.user.otp.path,
        },
    });
};

export default useOtp;
import type { AxiosError } from "axios";

/**
 * Composable for handling authentication logic.
 * Provides helpers for managing tokens, verifying sessions,
 * refreshing tokens, and logging out users.
 *
 * @returns {Object} Authentication state and methods
 * @module composables/useAuth
 */
const useAuth = () => {
    // state

    const { mutateAsync: refreshAuth } = useRefreshAuth();
    const { mutateAsync: verify } = useVerify();
    const { mutateAsync: signOut } = useSignOut();

    /**
     * Reactive cookie ref storing the access token.
     * @type {Ref<string>}
     * @memberof composables/useAuth
     */
    const token = useCookie("token", {
        maxAge: 60 * 60 * 24 * 30,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        path: "/",
        secure: true,
        sameSite: "lax",
    });

    /**
     * Reactive cookie ref storing the refresh token.
     * @type {Ref<string>}
     * @memberof composables/useAuth
     */
    const refreshToken = useCookie("refresh-token", {
        maxAge: 60 * 60 * 24 * 30,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        path: "/",
        secure: true,
        sameSite: "lax",
    });

    // methods

    /**
     * Update the stored access token.
     * @param {string} newToken - New access token value
     * @returns {void}
     * @memberof composables/useAuth
     */
    const updateToken = (newToken: string) => {
        token.value = newToken;
    };

    /**
     * Update the stored refresh token.
     * @param {string} newToken - New refresh token value
     * @returns {void}
     * @memberof composables/useAuth
     */
    const updateRefreshToken = (newToken: string) => {
        refreshToken.value = newToken;
    };

    /**
     * Log out the user by clearing tokens and optionally reloading the page.
     * @param {boolean} [reload] - If true, reloads the page after logout
     * @returns {Promise<void>}
     * @memberof composables/useAuth
     */
    const logout = async (reload?: boolean) => {
        if (refreshToken.value) {
            token.value = undefined;
            refreshToken.value = undefined;
            await signOut({ refresh_token: refreshToken.value! });
            if (reload) window.location.href = "/";
        }
    };

    /**
     * Check if the current user session is valid.
     * - Verifies the access token
     * - If invalid, tries to refresh the token
     * - If refreshing fails, logs out
     *
     * @returns {Promise<boolean>} True if authenticated, otherwise false
     * @memberof composables/useAuth
     */
    const checkAuth = async () => {
        if (token.value) {
            try {
                await verify({
                    token: token.value,
                });

                return true;
            } catch (e) {
                const err = e as AxiosError;

                if (err?.status && err.status >= 400) {
                    if (refreshToken.value) {
                        try {
                            const refreshResponse = await refreshAuth({
                                refresh: refreshToken.value,
                            });

                            updateToken(refreshResponse.access);
                            updateRefreshToken(refreshResponse.refresh);

                            return true;
                        } catch (e) {
                            const err = e as AxiosError;

                            if (err?.status && err.status >= 400) {
                                logout();
                            }
                        }
                    } else {
                        logout();
                    }
                }

                return false;
            }
        } else {
            if (refreshToken.value) {
                try {
                    const refreshResponse = await refreshAuth({
                        refresh: refreshToken.value,
                    });

                    updateToken(refreshResponse.access);
                    updateRefreshToken(refreshResponse.refresh);

                    return true;
                } catch (e) {
                    const err = e as AxiosError;

                    if (err?.status && err.status >= 400) {
                        logout();
                    }
                }
            } else {
                logout();
            }

            return false;
        }
    };

    // computed

    /**
     * Whether the user is logged in.
     * @type {ComputedRef<boolean>}
     * @memberof composables/useAuth
     */
    const isLoggedIn = computed(() => !!token.value);

    return {
        token,
        refreshToken,
        updateRefreshToken,
        updateToken,
        logout,
        isLoggedIn,
        checkAuth,
    };
};

export default useAuth;

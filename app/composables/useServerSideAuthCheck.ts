/**
 * Composable for handling server-side authentication check.
 *
 * - Verifies if the user is authenticated using `checkAuth`
 * - If valid, prefetches the account data using `suspense`
 * - Runs during server-side rendering via `onServerPrefetch`
 *
 * @param {boolean} [enabled] - Whether the authentication check should be performed (default: true).
 * @returns {void}
 * @module composables/useServerSideAuthCheck
 */

const useServerSideAuthCheck = (enabled = true) => {
    const { checkAuth } = useAuth();
    const { suspense } = useGetAccount();

    onServerPrefetch(async () => {
        if (enabled) {
            const isValid = await checkAuth();
            if (isValid) {
                await suspense();
            }
        }
    });
};

export default useServerSideAuthCheck;
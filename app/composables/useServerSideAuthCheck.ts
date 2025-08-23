/**
 * Composable for handling server-side authentication check.
 *
 * - Verifies if the user is authenticated using `checkAuth`
 * - If valid, prefetches the account data using `suspense`
 * - Runs during server-side rendering via `onServerPrefetch`
 *
 * @returns {void}
 * @module composables/useServerSideAuthCheck
 */
const useServerSideAuthCheck = () => {
    const { checkAuth } = useAuth();
    const { suspense } = useGetAccount();

    onServerPrefetch(async () => {
        const isValid = await checkAuth();
        if (isValid) {
            await suspense();
        }
    });
};

export default useServerSideAuthCheck;
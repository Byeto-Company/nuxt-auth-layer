// imports

import useAuth from "./useAuth";

// types

export type GetAccountResponse = AccountProfile;

const useGetAccount = () => {
    // state

    const { token } = useAuth();
    
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.profile;

    // computed

    const isEnabled = computed(() => {
        return !!token.value;
    });

    // methods

    return useOne<GetAccountResponse>({
        customResource: endpointResource,
        authorization: true,
        queryOptions: {
            enabled: isEnabled,
        },
    });
};

export default useGetAccount;

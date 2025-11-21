// types

export type UpdateAccountRequest = UpdateAccountProfile;

export type UpdateAccountResponse = AccountProfile;

const useUpdateAccount = () => {
    const runtimeConfig = useRuntimeConfig();
    const endpointResource = runtimeConfig.public.authModule.endpoints.update;

    return useUpdate<UpdateAccountResponse, UpdateAccountRequest>({
        customResource: endpointResource,
        contentType: "form",
        authorization: true,
    });
};

export default useUpdateAccount;

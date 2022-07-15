
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    return {
        provide: {
            clientId: config.CLIENT_ID
        }
    }
    // nuxtApp.provide('clientId', config.CLIENT_ID);
})

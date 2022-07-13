
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    console.log(config);
    console.log(config.CLIENT_ID);
    return {
        provide: {
            clientId: config.CLIENT_ID
        }
    }
    // nuxtApp.provide('clientId', config.CLIENT_ID);
})

import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        //privateRuntimeの場合はサーバービルドが走っている時にだけ描写され、クライアント側では、非表示になる
        CLIENT_ID : process.env.CLIENT_ID,
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
    },
    css: ["@/assets/tailwind.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                },
            },
        },
        transpile: ['@heroicons/vue']
    },
    buildModules: ['@pinia/nuxt'],
})

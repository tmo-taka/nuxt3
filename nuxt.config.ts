import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        //privateRuntimeの場合はサーバービルドが走っている時にだけ描写され、クライアント側では、非表示になる
        CLIENT_ID : process.env.CLIENT_ID,
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
    },
})

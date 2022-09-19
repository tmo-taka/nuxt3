import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const firebaseConfig ={
        apiKey: config.FIREBASE_API_KEY,
        authDomain: config.FIREBASE_AUTH_DOMAIN,
        projectId: config.FIREBASE_PROJECT_ID,
    }

    const firebase = initializeApp(firebaseConfig)
    const db = getFirestore(firebase)
    nuxtApp.provide('db',db)
})
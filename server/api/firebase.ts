import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from "firebase-admin/firestore"

export default async (request, response) => {
    const firebaseConfig ={
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
    }

    const firebase = initializeApp(firebaseConfig)
    const db = getFirestore(firebase)

    return db
}
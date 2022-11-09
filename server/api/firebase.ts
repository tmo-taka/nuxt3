import admin from 'firebase-admin';
import { initializeApp ,cert } from 'firebase-admin/app'
import { getFirestore } from "firebase-admin/firestore"

export default async (request, response) => {
    const firebaseConfig ={
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
    }

    const secretURL = process.env.GOOGLE_APPLICATION_CREDENTIALS || ''

    const firebase = (admin.apps.length === 0) ? initializeApp({credential: cert(secretURL)}): undefined
    const db = getFirestore(firebase)

    const usersRef = db.collection("Users");
    const snapshot = await usersRef.get();

    snapshot.forEach(doc => {
        console.log(`テスト ${doc.id} => ${doc.data()}`);
    });

    return snapshot;
}
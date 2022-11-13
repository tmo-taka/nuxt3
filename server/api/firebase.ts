import admin from 'firebase-admin';
import { initializeApp ,cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

export default async (request, response) => {
    const secretURL = process.env.GOOGLE_APPLICATION_CREDENTIALS || ''

    const firebase = (admin.apps.length === 0) ? initializeApp({credential: cert(secretURL)}) : undefined
    const db = getFirestore(firebase)

    const usersRef = db.collection('Users');
    const snapshot = await usersRef.get();

    type docType = {
        uid : string,
        name ?: string
    }

    const snapshotData:docType[] = snapshot.docs.map(doc => {
        return {
            uid: doc.id,
            ...doc.data()
        }
    })

    return snapshotData;
}
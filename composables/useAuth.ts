import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
} from 'firebase/auth'

export const useAuth = () => {
    const token = useState<string | null>('token', () => null)

    async function signIn(email: string, password: string) {
        return await new Promise<void>((resolve,reject) => {
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    userCredential.user
                    .getIdToken()
                    .then((idToken) => {
                        token.value = idToken
                        resolve()
                    })
                    .catch(reject)
                })
                .catch(reject)
        })
    }

    async function signOut() {
        return await new Promise<void>((resolve, reject) => {
        const auth = getAuth();
        firebaseSignOut(auth)
            .then(() => {
                token.value = null
                resolve()
            })
            .catch((error) => {
                reject(error)
            })
        })
    }

    return {
        signIn,
        signOut,
        token,
    }
}

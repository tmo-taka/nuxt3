import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    User
} from 'firebase/auth'
import { useErrors } from '@/store/error';

export const useAuth = () => {
    const token = useState<string | null>('token', () => null)
    const user = useState<User | null>('user',() => null)
    const { setError, resetErrors } = useErrors();

    async function signIn(email: string, password: string) {
        return await new Promise<void>((resolve,reject) => {
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    userCredential.user
                    .getIdToken()
                        .then((idToken) => {
                            token.value = idToken
                            user.value = auth.currentUser
                            resetErrors()
                            resolve()
                        })
                    .catch((reject) => reject)
                })
                .catch((reject) => {
                    resetErrors();
                    reject.message.includes('email') ? setError('email','メールアドレスが正しくありません') :setError('password','パスワードが正しくありません')
                })
        })
    }

    async function signOut() {
        return await new Promise<void>((resolve, reject) => {
        const auth = getAuth();
        firebaseSignOut(auth)
            .then(() => {
                token.value = null
                user.value = null
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
        user
    }
}

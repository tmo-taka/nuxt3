import {collection, getDocs} from 'firebase/firestore'

export const useUsers = () => {
    // TODO: useStateはobjどうするのかな？
    const name = useState<string>('name',()=>'')

    async function getUser(user:User) {
        if(user){
            const nuxtApp = useNuxtApp()
            const querySnapshot = await getDocs(collection(nuxtApp.$db, "Users"));
                querySnapshot.forEach((doc) => {
                    if(doc.id === user.value.uid){
                        name.value = doc.data().name
                    }
                })
        }
    }

    return {
        getUser,
        name
    }
}
import {defineStore} from 'pinia'

export const useLanguage = defineStore('language',{
    state: ()=> {
        return {
            languages: readonly(['ja'] as string[])
        }
    },
    actions: {
        setLanguage(val :string){
            this.language.push(val)
        }
    }
})
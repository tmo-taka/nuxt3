import {defineStore} from 'pinia'

export const useLanguage = defineStore('language',{
    state: ()=> {
        return {
            languages: ['ja']
        }
    },
    actions: {
        setLanguage(val :string){
            this.languages.push(val)
        }
    }
})
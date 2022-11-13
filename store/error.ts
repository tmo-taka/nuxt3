import {defineStore} from 'pinia'

export type Errors ={
    email : string,
    password: string
}

export const useErrors = defineStore('errors',{
    state: () => {
        return {
            errors: {
                email: '',
                password: ''
            }
        }
    },
    actions: {
        setError(key: keyof Errors, error :string):void {
            this.errors[key] = error;
        },
        resetErrors():void {
            Object.keys(this.errors).forEach((key: string) => (key === 'email' || key === 'password') ? this.setError(key,'') : '')
        }
    }
})
import {defineStore} from 'pinia'

export type Inputs ={
    email : string,
    password: string
}

export type Errors ={
    email : string,
    password: string
}

export const useInputs = defineStore('inputs',{
    state: ()=> {
        return {
            inputs: {
                email : '',
                password: '',
            },
            errors: {
                email: '',
                password: '',
            }
        }
    },
    actions: {
        setValue(key: keyof Inputs , val :string):void{
            this.inputs[key] = val;
        },
        setError(key: keyof Errors , error :string):void{
            this.errors[key] = error;
        },
        resetErrors():void {
            Object.keys(this.errors).forEach((key: string) => (key === 'email' || key === 'password') ? this.setError(key,'') : '')
        }
    }
})
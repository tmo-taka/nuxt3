import {defineStore} from 'pinia'

export type Inputs ={
    email : string,
    password: string
}

export const useInputs = defineStore('inputs',{
    state: ()=> {
        return {
            inputs: {
                email : '',
                password: '',
            }
        }
    },
    actions: {
        setValue(key: keyof Inputs , val :string){
            this.inputs[key] = val;
        }
    }
})
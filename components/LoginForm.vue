<script setup lang="ts">
    import { useInputs, Inputs } from '@/store/form';
    const { signIn } = useAuth();

    const {inputs} = useInputs();

    type FormObj = {
        name: keyof Inputs
    }

    const formData:FormObj[] = [
        {name: 'email'},
        {name: 'password'}
    ]

    onMounted(() =>{
        const element:HTMLElement | null = document.getElementById('login-modal');
        if(element instanceof HTMLInputElement){
            element.checked = true;
        }
    })

    const conversionUpper = (origin:string):string =>{
        const after = origin.slice( 0, 1 ).toUpperCase() + origin.slice( 1 ) ;
        return after;
    }

    const submit = ():void => {
        signIn(inputs.email, inputs.password)
    }
</script>

<template>
    <input type="checkbox" id="login-modal" class="modal-toggle"/>
    <div class="modal">
        <div class="modal-box card card-compact w-96 bg-base-100 shadow-xl mx-auto p-8">
            <div class="mb-6 text-center">Form</div>
            <div>
                <dl v-for="data in formData" :key="data.name" class="mb-6">
                    <dt class="mb-2">{{conversionUpper(data.name)}}</dt>
                    <dd><PartsTextForm :type="data.name"/></dd>
                </dl>
                <div class="text-center">
                    <button class="btn btn-outline btn-primary" @click="submit()">認証する</button>
                </div>
            </div>
        </div>
    </div>
</template>
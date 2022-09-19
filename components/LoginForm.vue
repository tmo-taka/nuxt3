<script setup lang="ts">
    import { useInputs, Inputs } from '@/store/form';
    const { signIn,token } = useAuth();

    const {inputs} = useInputs();
    const loadingFlag = useState<boolean>('loadingFlag',() => false)

    type FormObj = {
        name: keyof Inputs
    }

    const formData:FormObj[] = [
        {name: 'email'},
        {name: 'password'}
    ]

    onMounted(() =>{
        displayModal(true);
    })

    const displayModal = (flag:boolen):void =>{
        const element:HTMLElement | null = document.getElementById('login-modal');
        if(element instanceof HTMLInputElement){
            element.checked = flag;
        }
    }

    const changeLoadingFlag = ():void => {
        loadingFlag.value = !loadingFlag.value
    }

    const conversionUpper = (origin:string):string =>{
        const after = origin.slice( 0, 1 ).toUpperCase() + origin.slice( 1 ) ;
        return after;
    }

    const submit = ():void => {
        setTimeout(() => {
            changeLoadingFlag();
        }, 3000);
        changeLoadingFlag();
        signIn(inputs.email, inputs.password).then((result) => {
            if(token.value){
                displayModal(false);
            }
        })
    }
</script>

<template>
    <input type="checkbox" id="login-modal" class="modal-toggle"/>
    <div class="modal">
        <div class="modal-box card card-compact w-96 bg-base shadow-xl mx-auto p-8">
            <div v-if="loadingFlag" className="flex justify-center">
                <div className="animate-ping h-2 w-2 bg-primary rounded-full"></div>
                <div className="animate-ping h-2 w-2 bg-primary rounded-full mx-4"></div>
                <div className="animate-ping h-2 w-2 bg-primary rounded-full"></div>
            </div>
            <div v-else>
                <div class="mb-6 text-center">Hello!</div>
                <div>
                    <dl v-for="data in formData" :key="data.name" class="mb-6">
                        <dt class="mb-2">{{conversionUpper(data.name)}}</dt>
                        <dd><PartsTextForm :type="data.name"/></dd>
                        <dd><PartsAlert :type="data.name" /></dd>
                    </dl>
                    <div class="text-center">
                        <button class="btn btn-primary" @click="submit()">ログインする</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
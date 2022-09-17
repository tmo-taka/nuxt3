<script setup lang="ts">
    import { useInputs } from '@/store/form';
    const { signIn } = useAuth();

    const {inputs} = useInputs();

    const submit = ():void => {
        signIn(inputs.email, inputs.password)
    }
</script>

<template>
    <div>
        <div>Form</div>
        <div>
            <dl>
                <dt>Email</dt>
                <dd><PartsTextForm :type="'email'"/></dd>
            </dl>
            <dl>
                <dt>PassWord</dt>
                <dd><PartsTextForm :type="'password'"/></dd>
            </dl>
            <button class="btn btn-outline btn-primary" @click="submit()">認証する</button>
        </div>
    </div>
</template>
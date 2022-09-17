<script setup lang="ts">
    import { useInputs } from '@/store/form'

    const inputs = useInputs();
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
            {{inputs}}
        </div>
    </div>
</template>
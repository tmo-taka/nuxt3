<script setup lang="ts">
    import { useInputs, Inputs } from '@/store/form'
    type Props = {
        type : keyof Inputs
    }
    const props:Props = withDefaults(defineProps<Props>(),{
        type: 'email'
    })

    const inputs = useInputs();

    const changeValue = (event: Event,):void | string => {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }else {
            inputs.setValue(props.type,event.target.value)
        }
    }

</script>

<template>
    <input type="text" :value="inputs.inputs[props.type]" @input="changeValue($event)" class="input input-bordered w-full max-w-xs">
</template>
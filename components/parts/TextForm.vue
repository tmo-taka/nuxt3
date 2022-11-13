<script setup lang="ts">
import { useInputs, Inputs } from '@/store/form'
import { useErrors, Errors} from '@/store/error'
type Props = {
    type : keyof Inputs
}
const props:Props = withDefaults(defineProps<Props>(),{
    type: 'email'
})

const inputs = useInputs();
const errors = useErrors();

const judgeError = (props:Props):boolean => errors.errors[props.type] ? true: false

const changeValue = (event: Event,):void | string => {
    if (!(event.target instanceof HTMLInputElement)) {
        return;
    }else {
        inputs.setValue(props.type,event.target.value)
    }
}
</script>

<template>
    <input type="text"
        :value="inputs.inputs[props.type]"
        @input="changeValue($event)"
        class="input input-bordered w-full max-w-xs"
        :class="judgeError(props) ? 'input-error bg-red-200 animate-move-lr' : ''"
    />
</template>
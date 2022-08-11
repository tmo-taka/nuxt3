<script setup lang="ts">
import { ref } from 'vue';

    const { counter, inc, dec, double } = useSharedCounter()
    const router = useRouter();
    const { $clientId }= useNuxtApp()

    let flag = ref(false);

    const changeFlag = () => {flag.value =!flag.value}
</script>

<template>
    <div>counter: {{counter}}</div>
    <button @click="inc">増やす</button>
    <button @click="dec">減らす</button>
    <button @click="double">倍にする</button>
    <div>path:{{router.currentRoute.path}}</div>
    <div>nuxtApp:{{$clientId}}</div>

    <div>
        <h3 @click="changeFlag">アコーディオンエリア</h3>
        <div v-if="flag">
            アコーディオン
        </div>
    </div>
</template>
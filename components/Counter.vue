<script setup lang="ts">
import { ref } from 'vue';

    const { counter, inc, dec, double } = useSharedCounter()
    const router = useRouter();
    const { $clientId }= useNuxtApp()

    let flag = ref(false);

    const changeFlag = () => {flag.value =!flag.value}
</script>

<template>
    <div class="mx-auto py-6 w-48 flex text-xl">
        <div class="w-1/2 border-2 border-lime-500 p-3">counter: </div>
        <div class="w-1/2 border-2 border-l-0 border-lime-500 p-3">{{counter}}</div>
    </div>
    <div>
        <button class="btn" @click="inc">増やす</button>
        <button class="btn" @click="dec">減らす</button>
        <button class="btn" @click="double">倍にする</button>
    </div>
    <div>path:{{router.currentRoute.path}}</div>
    <div>nuxtApp:{{$clientId}}</div>

    <div>
        <h3 @click="changeFlag">アコーディオンエリア</h3>
        <div v-if="flag">
            アコーディオン
        </div>
    </div>
</template>
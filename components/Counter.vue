<script setup lang="ts">
    const { counter, inc, dec,double } = useSharedCounter()
    const router = useRouter();
    const { $clientId }= useNuxtApp()
</script>

<template>
    <div>counter: {{counter}}</div>
    <button @click="inc">増やす</button>
    <button @click="dec">減らす</button>
    <button @click="double">倍にする</button>
    <div>path:{{router.currentRoute.path}}</div>
    <div>nuxtApp:{{$clientId}}</div>
</template>
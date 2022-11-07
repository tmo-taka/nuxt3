<script setup lang="ts">
    const {data} = await useFetch('/api/firebase/');
    console.log(data);
</script>
<template>
    <NuxtLayout>
        <LoginForm />
        <Welcome />
    </NuxtLayout>
</template>
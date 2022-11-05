<script setup lang="ts">
    const {data} = await useFetch('/api/hello/');
    console.log(data);
</script>
<template>
    <NuxtLayout>
        <LoginForm />
        <Welcome />
    </NuxtLayout>
</template>
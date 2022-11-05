<script setup lang="ts">
    const {data} = await useFetch('/api/hello/');
    console.log(data.value);
</script>
<template>
    <NuxtLayout>
        <LoginForm />
        <Welcome />
    </NuxtLayout>
</template>
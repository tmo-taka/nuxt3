<script setup lang="ts">
    const { signIn,signOut,token } = useAuth()
    onMounted(() => {
        signIn('t.tkorock221@gmail.com','Data1192a');
    })
</script>
<template>
    <NuxtLayout>
        <h1  class="text-4xl text-red-700 text-center font-semibold">テスト</h1>
        <Counter />
    </NuxtLayout>
</template>
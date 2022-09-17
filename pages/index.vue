<script setup lang="ts">
    const { signIn,signOut,token } = useAuth()
</script>
<template>
    <NuxtLayout>
        <h1  class="text-4xl text-red-700 text-center font-semibold">テスト</h1>
        <Counter />
        <LoginForm />
    </NuxtLayout>
</template>
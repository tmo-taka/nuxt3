<script setup lang="ts">
    const { token, signOut } = useAuth();

    const clickSingOut = ():void => {
        signOut();
    }
</script>

<template>
    <header class="font-bold py-6 px-3 text-left">
        <div>Firebase練習用</div>
        <button v-if="token" @click="clickSingOut()">サインアウトする</button>
    </header>
</template>
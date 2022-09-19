<script setup lang="ts">

    const { name } = useUsers()

    const getName = ():string | unknown => {
        const  loginName:string | unknown = name.value ? name.value : undefined
        return loginName
    }
</script>

<template>
    <div>
        <h1  class="text-4xl text-red-700 text-center font-semibold">HEllo! {{getName()}}</h1>
    </div>
</template>
<!-- <script setup lang="ts">
 //HACK:  definePageMetaはNUxt3.2で登場したもので使えん
  https://zenn.dev/mihorin1729/articles/399980afa24ab7#nuxtbridge%E3%81%A7%E3%81%AF%E3%80%81%E3%80%8Cdefinepagemeta%E3%81%AF%E4%BD%BF%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%AC%E3%80%8D
  // definePageMeta({
  //   title : "テストページ",
  //   layout: 'top',
  // });
</script> -->

<template>
    <h1  class="text-4xl text-red-700 text-center font-semibold">テスト</h1>
    <button class="bg-indigo-700 text-white text-center px-3 py-4 rounded-xl hover:bg-red-500 duration-1000 group flex-auto">
      <p class="group-hover:text-red-900">これを押してね</p>
      <p class="group-hover:text-blue-900">これだけを押してね</p>
    </button>
    <p class="text-v_ddd">いっぱい</p>
    <div>
      <Counter />
      <Carousel />
    </div>
</template>

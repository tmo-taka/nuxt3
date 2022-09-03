<template>
  <div class="bg-base">
    <!-- NOTE: app.vueで使う際は<NuxtLayout>が必要 -->
      <header class="font-bold py-6 px-3 text-left">ヘッダーです</header>
      <slot />
      <footer class="font-bold py-6 px-3 text-right text-lg">フッターです</footer>
  </div>
</template>
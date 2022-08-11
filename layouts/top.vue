<template>
  <div>
    <!-- NOTE: app.vueで使う際は<NuxtLayout>が必要 -->
    <NuxtLayout>
      <header class="font-bold py-6 px-3 text-left">ヘッダーです</header>
      <NuxtPage />
      <footer class="font-bold py-6 px-3 text-right text-lg">フッターです</footer>
    </NuxtLayout>
  </div>
</template>
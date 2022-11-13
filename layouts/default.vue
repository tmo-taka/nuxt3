<template>
    <div class="bg-base">
      <!-- NOTE: app.vueで使う際は<NuxtLayout>が必要 -->
        <Header />
        <slot />
        <footer class="font-bold py-6 px-3 text-right text-lg">
          Firebase練習用
        </footer>
    </div>
</template>
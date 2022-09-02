# nuxt3
 Nuxt3の練習

# 学んだこと
 - useNuxtApp(): contextの意味合い
 - useRuntimeConfig(): configにアクセス
 - pluginはauto読み込み　楽ですね
 - nuxiコマンドを使って最小限のものを作ってきたいね
 - useRuntimeConfig()はpluginsかscript setupの中で使うでないとエラー
 - useStateはSSR用のもの(refの代用のもの)
 - tsconfig.jsonを[参考記事](https://v3.nuxtjs.org/guide/directory-structure/tsconfig/)のようにdir直下でextendsする必要あり

 ## tailwind.cssについて
   - [参考記事](https://zenn.dev/one_dock/articles/e7a4364c90d28f)

 ## Nuxt Bridgeについて
   - compositionAPIをauto importはしてくれていそうだけれど、vscodeがついて来れていない
   [参考記事](https://github.com/nuxt/bridge/issues/236)
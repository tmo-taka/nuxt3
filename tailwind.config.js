/** @type {import('tailwindcss').Config} */

const myColors = {
    primary: '#c53030',
    sub: 'rgb(190 242 100)',
    base: '#fffff9'
}

module.exports = {
  content: [
    "app.vue", //app.vueでtailwindcssを使いたい場合
    "./components/**/*.{vue,js,jsx,ts,tsx}",
    "./pages/**/*.{vue,js,jsx,ts,tsx}",
    "./layouts/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: myColors
    }
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          // lightを上書く必要あり
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: myColors.primary,
          base: myColors.base,
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}

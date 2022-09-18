/** @type {import('tailwindcss').Config} */

const myColors = {
    primary: 'rgb(132 204 22)',
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
          primary: myColors.primary
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}

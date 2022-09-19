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
      colors: myColors,
      keyframes: {
        move: {
          '0%': {	transform: 'translate(0, 0)'},
          '5%': {	transform: 'translate(-5px, -0)'},
          '10%': {	transform: 'translate(5px, 0)'},
          '15%': {	transform: 'translate(-5px, -0)'},
          '20%': {	transform: 'translate(5px, 0)'},
          '25%': {	transform: 'translate(-5px, -0)'},
          '30%': {	transform: 'translate(0, 0)'},
          '100%': {	transform: 'translate(0, 0)'}
        }
      },
      animation: {
        'move-lr': 'move 1.5s ease .5s 1 forwards'
      }
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

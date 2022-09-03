/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app.vue", //app.vueでtailwindcssを使いたい場合
    "./components/**/*.{vue,js,jsx,ts,tsx}",
    "./pages/**/*.{vue,js,jsx,ts,tsx}",
    "./layouts/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: 'rgb(132 204 22)',
          sub: 'rgb(190 242 100)',
          base: '#fffff9'
      }
    }
  },
  plugins: [require("daisyui")],
}

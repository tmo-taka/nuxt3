/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app.vue", //app.vueでtailwindcssを使いたい場合
    "./components/**/*.{vue,js,jsx,ts,tsx}",
    "./pages/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        v_ddd: '#9cdbff',
      }
    },
  },
  plugins: [],
}

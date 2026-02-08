export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1C9DBD'
      }
    },
    fontFamily: {
      heading: ['Asap', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif'],
      title: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js, jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body-white': '#cad8de',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

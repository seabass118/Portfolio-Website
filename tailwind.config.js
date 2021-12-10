module.exports = {
  purge: ['./src/**/*.{js, jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body-white': '#252a2c',
        'header-grey': '#222326',
        'header-border': '#373737',
      },
      fontFamily: {
        'readex-pro': ['Readex Pro', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

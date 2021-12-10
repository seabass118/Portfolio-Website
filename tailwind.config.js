module.exports = {
  purge: ['./src/**/*.{js, jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body-color': '#d3cdb1',
        'header-grey': '#222326',
        'header-border': '#373737',
        'off-white': '#f4edd8',
      },
      fontFamily: {
        'readex-pro': ['Readex Pro', 'sans-serif'],
      },
      boxShadow: {
        'message-shadow': '0px 0px 6px 0px #fff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

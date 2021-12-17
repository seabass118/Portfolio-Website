module.exports = {
  purge: ['./src/**/*.{js, jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body-color': '#d3cdb1',
        'nice-grey': 'rgb(34, 35, 38)',
        'header-border': '#373737',
        'dim-white': '#ffffff4f',
        'chill-red': '#d1283e',
      },
      fontFamily: {
        'readex-pro': ['Readex Pro', 'sans-serif'],
      },
      boxShadow: {
        'message-shadow': '0px 0px 6px 0px #fff',
      },
      animation: {
        'fish-ani': 'bounce 3s linear infinite'
      },
      screens: {
        'sm': '300px',
        'md': '478px',
        'lg': '600px',
        'xl': '880px',
      },
      width: {
        'large': '36rem',
        'medium': '26rem',
        'small': 'calc(100% - 3rem)',
        'social-icon': '2.5rem',
      },
      height: {
        'social-icon': '2.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

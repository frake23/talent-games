const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const containerScreens = Object.assign({}, defaultTheme.screens);
delete containerScreens['2xl'];

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      "400": "400px"
    },
    colors: {
      emerald: {
        DEFAULT: "#188E8E",
        light: "#EDFFFB",
        secondary: "#48BABA",
        hover: "#4CA2A8"
      },
      blue: {
        dark: "#1C2554",
        light: "#F8FFFF",
        "dark-hover": "#3B4787"
      },
      white: "#ffffff"
    },
    container: {
      screens: containerScreens,
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
      plugin(({ addComponents }) => {
        const texts = {
          '.text-h1': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '96px',
            lineHeight: '112px',
            letterSpacing: '-0.015em'
          },
          '.text-h2': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '56px',
            lineHeight: '70px',
            letterSpacing: '-0.005em'
          },
          '.text-h3': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: '56px',
          },
          '.text-h4': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '34px',
            lineHeight: '40px',
            letterSpacing: '0.0025em'
          },
          '.text-h5': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '28px',
          },
          '.text-h6': {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0.0015em'
          },
          '.text-subtitle1': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '18px',
            lineHeight: '21px',
            letterSpacing: '0.0015em'
          },
          '.text-subtitle2': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.001em'
          },
          '.text-body1': {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '22px',
            letterSpacing: '0.005em'
          },
          '.text-body2': {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '19px',
            letterSpacing: '0.0025em'
          },
          '.text-caption': {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0.01em'
          },
          '.text-overline': {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '10px',
            lineHeight: '14px',
            letterSpacing: '0.02em'
          },
          '.text-upper': {
            fontFamily: 'Roboto Condensed',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '16px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }
        };

        addComponents(texts, ['responsive']);
      })
  ],
}

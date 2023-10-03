const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      sm: { max: '365px' },
      md: '750px',
      lg: { max: '1920px' },
    },
    ...colors,
    gray: {
      100: '#E9E9E9',
      200: '#D9D9D9',
      300: '#656565',
      400: '#333',
    },
    primary: {
      100: '#FBFAF3',
      200: '#FFE99B',
      300: '#FFDF6D',
    },
    subColor: {
      100: `#C3F6AB`,
      200: `#A1F07C`,
    },
    brown: {
      100: `#F0C6AF`,
      200: `#D68C63`,
    },
    extend: {
      fontColor: {
        100: '#FFFFFF',
        200: '#646F7C',
        300: '#808080',
        error: '#FF0000',
        black: '#000000',
      },
      fontSize: {
        micro: '6px',
        es: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        md: '20px',
        big: '24px',
        lg: '28px',
        xl: '32px',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        bold: '700',
        bolder: '900',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      display: `'Noto Sans KR', sans-serif`,
    },
  },
  plugins: [require('tailwindcss-animate')],
}

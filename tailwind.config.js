/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      gray: {
        100: '#FBFAFF',
        300: '#F3F0FF',
        600: '#746E82',
        700: '#575361',
        900: '#857E95',
      },
      purple: {
        100: '#C1B2FA',
        light: '#AC96E4',
        DEFAULT: '#7A5FEC',
        dark: '#7C3AED',
      },
      green: {
        light: '#73B172',
        dark: '#4E884D',
      },
      red: {
        light: '#F2D9D9',
        dark: '#E36363',
      },
    },
    lineHeight: {
      default: '130%',
    },
    extend: {},
  },
  plugins: [],
}

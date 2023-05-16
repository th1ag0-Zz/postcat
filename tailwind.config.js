/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'DM Sans', 'DM Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-600': '#7F56D9',
        'primary-300': '#D6BBFB',

        'gray-transparent': 'rgba(0, 0, 0, 0.64)',
        'gray-500': '#667085',
        'gray-700': '#344054',
        'gray-900': '#101828',

        'success-25': '#F6FEF9',
        'success-300': '#6CE9A6',
        'success-700': '#027A48',

        skeleton: '#D9D9D9',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#02152d',
        tertiary: '#0873ff',
        quinary: '#f8bc04',
        text: '#ffffff',
      },
      maxWidth: {
        wrapper: '1280px',
      },
      animation: {
        fade: 'fade 300ms ease-in both',
      },
    },
  },
  plugins: [],
};

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

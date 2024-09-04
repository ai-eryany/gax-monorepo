/** @type {import('tailwindcss').Config} */
// TODO: test removing the packages from content, because we are at monorepo
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: {
        },
      },
      maxWidth: {
        wrapper: '1280px',
      },
    },
  },
  plugins: [],
};

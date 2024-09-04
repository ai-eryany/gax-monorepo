/** @type {import("prettier").Config} */

import globalprettier from '../../prettier.config.js';

const config = {
  ...globalprettier,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cntl', 'clx'],
  tailwindPreserveWhitespace: true,
};

export default config;

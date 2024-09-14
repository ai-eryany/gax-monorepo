/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    printWidth: 80,
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindFunctions: ['cntl', 'clx'],
    tailwindPreserveWhitespace: true,
};

export default config;

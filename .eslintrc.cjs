// File: .eslintrc.cjs
// Docs: https://eslint.org/docs/latest/use/configure/configuration-files

module.exports = {
  extends: ['prettier', 'eslint:recommended'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  parserOptions: {},
  rules: {},
};

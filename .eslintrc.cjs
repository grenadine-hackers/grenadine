/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:jest/all",
    "plugin:jest-dom/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};

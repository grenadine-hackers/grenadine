module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended", "react-app", "plugin:react/recommended", "prettier"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    "import",
    "jest",
    "jsx-a11y",
    "mysticatea",
    "prefer-object-spread",
    "prettier",
    "react",
    "@typescript-eslint",
    "risxss",
    "eslint-plugin-import-helpers"
  ],
  "ignorePatterns": ["jest.config.ts", "**/vendor/*.js", "**/*.d.ts"],
  rules: {
  }
}

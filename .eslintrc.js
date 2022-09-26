module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "latest",
    },
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "eslint-plugin-import", "testing-library", "jest-dom"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debug": "warn",
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
  },
}

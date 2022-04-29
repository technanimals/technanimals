const path = require("path");

const root = process.cwd();

const project = path.resolve(root, "tsconfig.json");

module.exports = {
  env: {
    es6: true,
  },
  extends: ["./base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: "readonly",
    google: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project,
    sourceType: "module",
  },
  rules: {
    "class-methods-use-this": "off",
  },
};

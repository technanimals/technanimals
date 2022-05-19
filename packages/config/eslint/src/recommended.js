/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
    google: true,
    fetch: true,
  },
  env: {
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/lib/*',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/*.d.ts',
          '**/*.eslintrc.js',
          '**/bob.config.js',
        ],
      },
    ],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'class-methods-use-this': ['error', { exceptMethods: ['render'] }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': ['error', { json: 'always', scss: 'always' }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-new': 'off',
    'import/order': 'error',
    'object-curly-newline': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    'prettier/prettier': ['error', require('@technanimals/prettier')],
    'no-use-before-define': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
};

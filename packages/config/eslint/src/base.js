/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/lib/*', '**/*.spec.ts', '**/*.spec.tsx', '**/*.d.ts'],
          },
        ],

        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'implicit-arrow-linebreak': 'off',
        'import/extensions': ['error', { json: 'always', scss: 'always' }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-new': 'off',
        'import/order': 'error',
        'object-curly-newline': 'off',
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
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': 'off',
        '@graphql-eslint/naming-convention': [
          'error',
          { types: 'PascalCase', FieldDefinition: 'camelCase' },
        ],
      },
    },
  ],
};

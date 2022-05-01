module.exports = {
  root: true,
  extends: ['plugin:@technanimals/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: [
          './packages/*/tsconfig.json',
          'packages/paystack/*/tsconfig.json',
          'packages/paystack/core/*/tsconfig.json',
        ],
      },
    },
  ],
};

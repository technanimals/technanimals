module.exports = {
  root: true,
  extends: ['plugin:@technanimals/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./packages/*/tsconfig.json'],
      },
    },
  ],
};

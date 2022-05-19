const path = require('path');
const fs = require('fs');

const tsconfig = path.resolve('./tsconfig.json');

const projects = [
  'packages/*/tsconfig.json',
  'packages/paystack/*/tsconfig.json',
  'packages/paystack/core/*/tsconfig.json',
];

const isRoot = !fs.existsSync(tsconfig);

const project = isRoot ? projects : tsconfig;

module.exports = {
  root: true,
  extends: ['plugin:@technanimals/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project,
      },
    },
  ],
};

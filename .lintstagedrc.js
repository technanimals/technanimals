module.exports = {
  '*.{ts,tsx,graphql}': ['yarn lint', 'yarn build', 'yarn format'],
  '*.{json,css}': ['yarn format'],
};

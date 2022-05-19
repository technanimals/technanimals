module.exports = {
  '*.{ts,tsx,js}': ['yarn eslint -c .eslintrc.js', 'yarn format'],
  '*.{json,css}': ['yarn format'],
};

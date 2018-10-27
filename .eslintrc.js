module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true,
  },
  rules: {
    'prefer-destructuring': ['error', { object: false, array: false }],
    'max-len': ['error', { code: 80 }],
    'implicit-arrow-linebreak': 'off',
  },
};

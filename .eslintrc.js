module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'react-app',
  rules: {
    "comma-dangle": ['error', 'always-multiline'],
    indent: ['error', 2],
    semi: ['error', 'always'],
  },
};
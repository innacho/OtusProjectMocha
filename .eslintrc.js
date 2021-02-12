module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['mocha'],

  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    allowForLoopAfterthoughts: 0,
  },
  settings: {
  },
};

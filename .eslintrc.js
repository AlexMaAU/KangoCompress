module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-console': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/no-direct-mutation-state': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-one-expression-per-line': 0,
    'max-len': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'linebreak-style': 0,
    'comma-dangle': 0,
  },
};

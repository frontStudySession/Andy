module.exports = {
  env: {
    // 해당 환경 관련 명령어들을 쓸거다
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // React를 사용하기 떄문에
    },
  },
  settings: {
    react: { version: 'detect' }, // React에서 자주 사용하는 버전
  },
  // plugin / extends는 airbnb등에서 배포한 버전이 있으나, Kelly 주로 사용하시는 것
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks', // hook에서 dependency 등을 확인, react-hook의 dependency의 경우는 off하고 쓰거나 해당 줄에따른 ignore도 가능
    'jsx-a11y', // html 관련해서 tag, attr 잘못 쓸 경우 체크
    'prettier',
  ],
  // 주로 recommend 사용
  extends: [
    'eslint:recommended', // prettier 사용을 위해
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
  },
};

// npm i eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser -D
// npm i eslint-config-prettier eslint-plugin-prettier prettier -D

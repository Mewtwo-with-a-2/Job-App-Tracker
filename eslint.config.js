import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
const { nodeBuiltin: node, browser } = globals;

export default [
  js.configs.recommended,
  {
    rules: {
      'require-atomic-updates': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      eqeqeq: 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },
  {
    files: ['server/**/*.js'],
    languageOptions: {
      globals: {
        ...node,
      },
    },
  },
  {
    files: ['client/**/*.{js,jsx}'],
    ...reactRecommended,
    plugins: {
      react,
    },

    languageOptions: {
      ...reactRecommended.languageOptions,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['client/**/*.jsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
];

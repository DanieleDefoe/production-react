import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import i18next from 'eslint-plugin-i18next';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  { ignores: ['build', 'storybook-static'] },
  {
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.strictTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked,
      i18next.configs['flat/recommended'],
      prettierConfig,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json', './.storybook/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: '18.3',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      react,
      prettier,
      storybook,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'prettier/prettier': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-indent': [2, 2],
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
      indent: [2, 2],
      'i18next/no-literal-string': ['error', { markupOnly: true }],
      '@typescript-eslint/strict-boolean-expressions': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'max-len': [
        'error',
        {
          ignoreComments: true,
          code: 200,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'react/no-unescaped-entities': 'warn',
    },
  },
  {
    files: [
      'src/__tests__/**/*.test.{ts,tsx}',
      'src/__stories__/**/*.{ts,tsx}',
    ],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }
);

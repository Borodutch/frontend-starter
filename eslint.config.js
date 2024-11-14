import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import sortImports from 'eslint-plugin-sort-imports-es6-autofix'
import importPlugin from 'eslint-plugin-import'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default [
  {
    ignores: [
      '**/tailwind.config.js',
      '**/postcss.config.js',
      '**/.yarn/**',
      '**/node_modules/**',
    ],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslintParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        node: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      prettier,
      'sort-imports-es6-autofix': sortImports,
      import: importPlugin,
      'no-relative-import-paths': noRelativeImportPaths,
      tailwindcss,
    },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: false },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
      'require-await': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-tailwindcss'],
          trailingComma: 'es5',
          tabWidth: 2,
          semi: false,
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
      'sort-imports-es6-autofix/sort-imports-es6': [
        2,
        {
          ignoreCase: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'import/prefer-default-export': 'error',
      'tailwindcss/no-custom-classname': ['error'],
    },
    settings: {
      tailwindcss: {
        config: './tailwind.config.js',
      },
    },
  },
]

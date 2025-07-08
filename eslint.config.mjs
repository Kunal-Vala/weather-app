import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['dist', 'node_modules', 'eslint.config.mjs'],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: globals.browser,
      sourceType: 'script',
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['webpack.config.js'],
    ignores: ['node_modules', 'dist', 'eslint.config.mjs'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
  },
  prettierConfig,
]);

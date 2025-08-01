import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

export default {
  plugins: {import: importPlugin, 'unused-imports': unusedImports},
  rules: {
    /**
     * Disallow unused imports
     * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
     */
    'unused-imports/no-unused-imports': 'error',
  },
};

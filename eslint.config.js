
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";


export default [

  pluginJs.configs.recommended,
  // {
  //   ignores: [
  //     "node_modules/*",
  //     "dist/*",
  //     "coverage/*"]
  // },
  {
    files: ['**/*.spec.js', '**/*.test.js'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },

];
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint, { plugin } from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "eslint-plugin-vitest";

export default tseslint.config([
  
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...vitest.environments.env.globals },
    },
  
  rules: {
    ...jestDom.configs.recommended.rules,
    ...testingLibrary.configs.react.rules,
    ...vitest.configs.recommended.rules,
  },
  plugins: {
    "jest-dom": jestDom,
    "testing-library": testingLibrary,
    "vitest": vitest,
  }

  }, 
])

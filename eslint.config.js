import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],

    extends: ["@eslint/js/recommended", "prettier"],

    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },

    rules: {
      indent: ["error", 4, { SwitchCase: 1 }],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  },
  {
    // Apply to HTML files
    files: ["*.html"],
    plugins: ["html"],
    processor: "html/html"
  }
]);

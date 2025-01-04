// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  /* Global */
  {
    files: ["**/*.{mjs,ts,vue}"],
    ignores: ["eslint.config.mjs"],
    rules: {
      eqeqeq: "error",
      "no-console": ["warn", { allow: ["log", "assert", "debug", "error"] }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
    },
  }
);

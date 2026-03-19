import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/build/**",
      "**/out/**",
      "**/.turbo/**",
      "**/coverage/**",
      "**/.source/**",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
  // ───────────────────────────────────────────────────────────────────────
  // JSX Accessibility rules (eslint-plugin-jsx-a11y)
  //
  // Applied to all TSX files across packages and apps so that
  // accessibility violations are caught at the root level, even for
  // packages that do not use eslint-config-next.
  // ───────────────────────────────────────────────────────────────────────
  {
    files: ["**/*.tsx"],
    ...jsxA11y.flatConfigs.recommended,
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/img-redundant-alt": "warn",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/interactive-supports-focus": "warn",
    },
  },
  // ───────────────────────────────────────────────────────────────────────
  // Semantic token enforcement: ban raw Tailwind gray-scale colors in
  // production code. Use var(--neutral-*) semantic tokens instead.
  //
  // NOTE: ESLint `no-restricted-syntax` operates on AST nodes, so it
  // catches string Literals and TemplateLiteral quasis that contain raw
  // Tailwind color utilities. It cannot catch dynamic string concatenation
  // or cn() calls with variable inputs. The governance CI script
  // (`scripts/verify-ui-governance.ts`) provides a complementary
  // grep-based budget check for full coverage.
  // ───────────────────────────────────────────────────────────────────────
  {
    files: [
      "packages/ui/src/**/*.{ts,tsx}",
      "apps/web/src/**/*.{ts,tsx}",
      "apps/landing-page/src/**/*.{ts,tsx}",
    ],
    ignores: ["**/*.stories.*"],
    rules: {
      "no-restricted-syntax": [
        "warn",
        {
          selector:
            "Literal[value=/\\b(bg|text|border)-(slate|gray|zinc)-\\d+\\b/]",
          message:
            "Use semantic tokens (e.g., bg-[var(--neutral-3)]) instead of raw Tailwind gray-scale colors. See CLAUDE.md § Tailwind CSS.",
        },
        {
          selector:
            "TemplateLiteral[quasis.0.value.raw=/\\b(bg|text|border)-(slate|gray|zinc)-\\d+\\b/]",
          message:
            "Use semantic tokens instead of raw Tailwind gray-scale colors.",
        },
      ],
    },
  }
);

import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      // Avoid hardcoded labels
      "react/jsx-no-literals": "error",
      // Consistently import navigation APIs from `@/i18n/routing`
      "no-restricted-imports": [
        "error",
        {
          name: "next/link",
          message: "Please import from `@/i18n/routing` instead.",
        },
        {
          name: "next/navigation",
          importNames: [
            "redirect",
            "permanentRedirect",
            "useRouter",
            "usePathname",
          ],
          message: "Please import from `@/i18n/routing` instead.",
        },
      ],
    },
  }),
];

export default eslintConfig;

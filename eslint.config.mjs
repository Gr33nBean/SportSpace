import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/.next",
        "**/.husky",
        "**/.cache",
        "**/package-lock.json",
        "**/public",
        "**/node_modules",
        "**/next-env.d.ts",
        "**/next.config.mjs",
        "**/postcss.config.mjs",
        "**/eslint.config.mjs",
        "**/yarn.lock",
    ],
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
}, ...fixupConfigRules(compat.extends(
    "next",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
)), {
    plugins: {
        prettier: fixupPluginRules(prettier),
        "react-hooks": fixupPluginRules(reactHooks),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        "unused-imports": unusedImports,
        "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "prettier/prettier": "error",
        "import/prefer-default-export": "off",
        "simple-import-sort/exports": "error",

        "simple-import-sort/imports": ["error", {
            groups: [["^\\u0000"], [
                "^(assert|buffer|child_process|cluster|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|stream|string_decoder|timers|tls|url|util|v8|vm|zlib)$",
            ], ["^next", "^next/(.*)$"], ["^react$", "^@?\\w"], ["^(@|components|utils|hooks|services|lib|contexts|config|pages)(/.*|$)"], ["^\\.\\.(?!/?$)", "^\\.\\./?$"], ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], ["^.+\\.?(css|scss|sass|less)$"]],
        }],

        "no-var": "error",
        "no-plusplus": "off",
        "no-unused-vars": "off",
        "no-param-reassign": "error",
        "no-case-declarations": "off",
        "quote-props": ["warn", "as-needed"],
        "no-irregular-whitespace": "off",
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-non-null-assertion": "off",

        "react/jsx-filename-extension": ["warn", {
            extensions: ["ts", "tsx"],
        }],

        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
}];
import type { ESLint, Linter } from "eslint";
import rule from "./rules/enforce-rad-imports";

const plugin = {
    meta: { name: "design-system" },
    rules: { "enforce-rad-imports": rule },
} satisfies ESLint.Plugin;

export const configs: Linter.Config[] = [
    {
        files: ["**/*.ts", "**/*.vue"],
        plugins: { "design-system": plugin },
        rules: { "design-system/enforce-rad-imports": "error" },
    },
];

export default plugin;

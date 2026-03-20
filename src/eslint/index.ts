import type { ESLint, Linter } from "eslint";
import rule from "./rules/enforce-rad-imports";

const plugin: ESLint.Plugin = {
    meta: { name: "design-system" },
    // @ts-expect-error - RuleModule from @typescript-eslint/utils is structurally compatible but nominally mismatched
    rules: { "enforce-rad-imports": rule },
};

export const configs: Linter.Config[] = [
    {
        files: ["**/*.ts", "**/*.vue"],
        plugins: { "design-system": plugin },
        rules: { "design-system/enforce-rad-imports": "error" },
    },
];

export default plugin;

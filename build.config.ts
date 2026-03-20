import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    entries: ["src/eslint/index"],
    outDir: "dist",
    declaration: true,
    clean: true,
    failOnWarn: false,
    rollup: { emitCJS: true },
    externals: ["@typescript-eslint/utils", "eslint"],
});

import config from "@adddog/eslint";

export default config({ vue: true })
    .overrideRules({ "no-barrel-files/no-barrel-files": "off", "ts/no-explicit-any": "off" });

import type { RuleListener, RuleWithMetaAndName } from "@typescript-eslint/utils/eslint-utils";
import type { RuleContext, RuleModule } from "@typescript-eslint/utils/ts-eslint";

export function createEslintRule<TOptions extends readonly unknown[], TMessageIds extends string>({
    name: _name,
    meta,
    defaultOptions,
    create,
}: Readonly<RuleWithMetaAndName<TOptions, TMessageIds>>): RuleModule<TMessageIds, TOptions> {
    const emptyDefaults = [] as TOptions;
    return {
        defaultOptions: defaultOptions ?? emptyDefaults,
        meta,
        create: (context: Readonly<RuleContext<TMessageIds, TOptions>>): RuleListener => {
            return create(context, context.options ?? defaultOptions);
        },
    } as RuleModule<TMessageIds, TOptions>;
}

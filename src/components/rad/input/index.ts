import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Input } from "./Input.vue";

export const inputVariants = cva(
    "flex w-full bg-transparent px-3 py-1 text-base transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    {
        variants: {
            variant: {
                default:
          "border border-input shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                // Theme-aware enhanced variant
                enhanced: [
                    "border-[length:var(--theme-border-width,1px)] border-border",
                    "shadow-theme",
                    "focus:translate-x-[calc(var(--theme-hover-offset-x,0px)*0.5)]",
                    "focus:translate-y-[calc(var(--theme-hover-offset-y,0px)*0.5)]",
                    "focus:shadow-none",
                    "focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                ].join(" "),
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export type InputVariants = VariantProps<typeof inputVariants>;

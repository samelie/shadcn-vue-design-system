<script lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "../../lib/utils/cn";

export type MetricTone = "default" | "warning" | "destructive" | "muted";

interface Props {
    readonly label: string;
    readonly value: string | null;
    readonly unit?: string;
    readonly tone?: MetricTone;
    readonly emptyText?: string;
    readonly class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
    tone: "default",
    emptyText: "—",
});
const tones: Record<MetricTone, string> = {
    default: "",
    warning: "text-warning",
    destructive: "text-destructive",
    muted: "text-muted-foreground",
};
</script>

<template>
    <div
        data-slot="metric-tile"
        :class="cn('flex flex-col gap-1', tones[props.value === null ? 'muted' : props.tone], props.class)"
    >
        <span class="text-muted-foreground text-sm">{{ props.label }}</span>
        <span class="tabular-nums font-medium">
            {{ props.value === null ? props.emptyText : props.value }}
            <span v-if="props.unit" class="text-sm">{{ props.unit }}</span>
        </span>
    </div>
</template>

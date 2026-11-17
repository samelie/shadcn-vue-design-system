<script lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "../../lib/utils/cn";
import Badge from "../ui/badge/Badge.vue";

export type StatusTone = "success" | "warning" | "destructive" | "muted";

interface Props {
    readonly tone: StatusTone;
    readonly class?: HTMLAttributes["class"];
}
</script>

<script setup lang="ts">
const props = defineProps<Props>();
const tones: Record<StatusTone, string> = {
    success: "border-transparent bg-success text-success-foreground",
    warning: "border-transparent bg-warning text-warning-foreground",
    destructive: "border-transparent bg-destructive text-white",
    muted: "border-transparent bg-muted text-muted-foreground",
};
</script>

<template>
    <Badge
        variant="outline"
        data-slot="status-badge"
        :class="cn(tones[props.tone], props.class)"
    >
        <slot />
    </Badge>
</template>

<script setup lang="ts">
import type { RangeCalendarCellTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import OriginalRangeCalendarCellTrigger from "../../ui/range-calendar/RangeCalendarCellTrigger.vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
    <OriginalRangeCalendarCellTrigger v-bind="props" data-slot="range-calendar-cell-trigger">
        <slot />
    </OriginalRangeCalendarCellTrigger>
</template>

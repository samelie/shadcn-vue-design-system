<script setup lang="ts">
import type { CalendarCellTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import OriginalCalendarCellTrigger from "../../ui/calendar/CalendarCellTrigger.vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
    <OriginalCalendarCellTrigger v-bind="props" data-slot="calendar-cell-trigger">
        <slot />
    </OriginalCalendarCellTrigger>
</template>

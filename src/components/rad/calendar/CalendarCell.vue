<script setup lang="ts">
import type { CalendarCellProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import OriginalCalendarCell from "../../ui/calendar/CalendarCell.vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<CalendarCellProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
    <OriginalCalendarCell v-bind="props" data-slot="calendar-cell">
        <slot />
    </OriginalCalendarCell>
</template>

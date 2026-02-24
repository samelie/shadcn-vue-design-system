<script setup lang="ts">
import OriginalRangeCalendarHeadCell from "../../ui/range-calendar/RangeCalendarHeadCell.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalRangeCalendarHeadCell v-bind="$attrs" data-slot="range-calendar-head-cell">
        <slot />
    </OriginalRangeCalendarHeadCell>
</template>

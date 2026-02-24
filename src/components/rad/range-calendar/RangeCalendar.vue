<script setup lang="ts">
import OriginalRangeCalendar from "../../ui/range-calendar/RangeCalendar.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalRangeCalendar v-bind="$attrs" data-slot="range-calendar">
        <template #default="slotProps">
            <slot v-bind="slotProps" />
        </template>
    </OriginalRangeCalendar>
</template>

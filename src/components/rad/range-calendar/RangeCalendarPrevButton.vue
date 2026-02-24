<script setup lang="ts">
import OriginalRangeCalendarPrevButton from "../../ui/range-calendar/RangeCalendarPrevButton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalRangeCalendarPrevButton v-bind="$attrs" data-slot="range-calendar-prev-button">
        <slot />
    </OriginalRangeCalendarPrevButton>
</template>

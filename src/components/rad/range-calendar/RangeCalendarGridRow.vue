<script setup lang="ts">
import OriginalRangeCalendarGridRow from '../../ui/range-calendar/RangeCalendarGridRow.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarGridRow v-bind="$attrs" data-slot="range-calendar-grid-row">
    <slot />
  </OriginalRangeCalendarGridRow>
</template>

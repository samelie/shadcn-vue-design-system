<script setup lang="ts">
import OriginalRangeCalendarGrid from '../../ui/range-calendar/RangeCalendarGrid.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarGrid v-bind="$attrs">
    <slot />
  </OriginalRangeCalendarGrid>
</template>

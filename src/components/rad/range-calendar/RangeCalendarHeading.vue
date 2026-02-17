<script setup lang="ts">
import OriginalRangeCalendarHeading from '../../ui/range-calendar/RangeCalendarHeading.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarHeading v-bind="$attrs" data-slot="range-calendar-heading">
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </OriginalRangeCalendarHeading>
</template>

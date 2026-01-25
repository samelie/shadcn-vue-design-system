<script setup lang="ts">
import OriginalRangeCalendarHeadCell from '../../ui/range-calendar/RangeCalendarHeadCell.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarHeadCell v-bind="$attrs">
    <slot />
  </OriginalRangeCalendarHeadCell>
</template>

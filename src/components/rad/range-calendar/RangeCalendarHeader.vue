<script setup lang="ts">
import OriginalRangeCalendarHeader from '../../ui/range-calendar/RangeCalendarHeader.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarHeader v-bind="$attrs">
    <slot />
  </OriginalRangeCalendarHeader>
</template>

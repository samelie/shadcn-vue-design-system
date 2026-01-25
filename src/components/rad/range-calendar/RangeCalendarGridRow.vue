<script setup lang="ts">
import OriginalRangeCalendarGridRow from '../../ui/range-calendar/RangeCalendarGridRow.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarGridRow v-bind="$attrs">
    <slot />
  </OriginalRangeCalendarGridRow>
</template>

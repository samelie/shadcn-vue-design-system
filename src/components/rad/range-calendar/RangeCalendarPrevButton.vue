<script setup lang="ts">
import OriginalRangeCalendarPrevButton from '../../ui/range-calendar/RangeCalendarPrevButton.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarPrevButton v-bind="$attrs">
    <slot />
  </OriginalRangeCalendarPrevButton>
</template>

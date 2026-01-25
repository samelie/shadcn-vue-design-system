<script setup lang="ts">
import OriginalRangeCalendarGridHead from '../../ui/range-calendar/RangeCalendarGridHead.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarGridHead v-bind="$attrs">
    <slot />
  </OriginalRangeCalendarGridHead>
</template>

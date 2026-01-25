<script setup lang="ts">
import OriginalRangeCalendarGridBody from '../../ui/range-calendar/RangeCalendarGridBody.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarGridBody v-bind="$attrs">
    <slot />
  </OriginalRangeCalendarGridBody>
</template>

<script setup lang="ts">
import OriginalRangeCalendarNextButton from '../../ui/range-calendar/RangeCalendarNextButton.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarNextButton v-bind="$attrs" data-slot="range-calendar-next-button">
    <slot />
  </OriginalRangeCalendarNextButton>
</template>

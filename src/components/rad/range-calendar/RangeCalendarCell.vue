<script setup lang="ts">
import type { RangeCalendarCellProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import OriginalRangeCalendarCell from '../../ui/range-calendar/RangeCalendarCell.vue'

const props = defineProps<RangeCalendarCellProps & { class?: HTMLAttributes['class'] }>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarCell v-bind="props" data-slot="range-calendar-cell">
    <slot />
  </OriginalRangeCalendarCell>
</template>

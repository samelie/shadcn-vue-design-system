<script setup lang="ts">
import type { RangeCalendarCellTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import OriginalRangeCalendarCellTrigger from '../../ui/range-calendar/RangeCalendarCellTrigger.vue'

const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalRangeCalendarCellTrigger v-bind="props">
    <slot />
  </OriginalRangeCalendarCellTrigger>
</template>

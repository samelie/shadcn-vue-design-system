<script setup lang="ts">
import type { CalendarCellTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import OriginalCalendarCellTrigger from '../../ui/calendar/CalendarCellTrigger.vue'

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarCellTrigger v-bind="props" data-slot="calendar-cell-trigger">
    <slot />
  </OriginalCalendarCellTrigger>
</template>

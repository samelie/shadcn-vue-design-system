<script setup lang="ts">
import type { CalendarCellProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import OriginalCalendarCell from '../../ui/calendar/CalendarCell.vue'

const props = defineProps<CalendarCellProps & { class?: HTMLAttributes['class'] }>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarCell v-bind="props">
    <slot />
  </OriginalCalendarCell>
</template>

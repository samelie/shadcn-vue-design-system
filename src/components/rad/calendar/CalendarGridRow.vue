<script setup lang="ts">
import OriginalCalendarGridRow from '../../ui/calendar/CalendarGridRow.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarGridRow v-bind="$attrs" data-slot="calendar-grid-row">
    <slot />
  </OriginalCalendarGridRow>
</template>

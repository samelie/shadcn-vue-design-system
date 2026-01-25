<script setup lang="ts">
import OriginalCalendarGrid from '../../ui/calendar/CalendarGrid.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarGrid v-bind="$attrs">
    <slot />
  </OriginalCalendarGrid>
</template>

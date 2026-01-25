<script setup lang="ts">
import OriginalCalendarHeading from '../../ui/calendar/CalendarHeading.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarHeading v-bind="$attrs">
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </OriginalCalendarHeading>
</template>

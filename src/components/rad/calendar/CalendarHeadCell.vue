<script setup lang="ts">
import OriginalCalendarHeadCell from '../../ui/calendar/CalendarHeadCell.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarHeadCell v-bind="$attrs">
    <slot />
  </OriginalCalendarHeadCell>
</template>

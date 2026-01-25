<script setup lang="ts">
import OriginalCalendarGridBody from '../../ui/calendar/CalendarGridBody.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarGridBody v-bind="$attrs">
    <slot />
  </OriginalCalendarGridBody>
</template>

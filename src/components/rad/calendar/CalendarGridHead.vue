<script setup lang="ts">
import OriginalCalendarGridHead from '../../ui/calendar/CalendarGridHead.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarGridHead v-bind="$attrs">
    <slot />
  </OriginalCalendarGridHead>
</template>

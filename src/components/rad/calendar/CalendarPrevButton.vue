<script setup lang="ts">
import OriginalCalendarPrevButton from '../../ui/calendar/CalendarPrevButton.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarPrevButton v-bind="$attrs">
    <slot />
  </OriginalCalendarPrevButton>
</template>

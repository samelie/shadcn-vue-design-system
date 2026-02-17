<script setup lang="ts">
import OriginalCalendarPrevButton from '../../ui/calendar/CalendarPrevButton.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCalendarPrevButton v-bind="$attrs" data-slot="calendar-prev-button">
    <slot />
  </OriginalCalendarPrevButton>
</template>

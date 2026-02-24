<script setup lang="ts">
import OriginalCalendarHeader from "../../ui/calendar/CalendarHeader.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCalendarHeader v-bind="$attrs" data-slot="calendar-header">
        <slot />
    </OriginalCalendarHeader>
</template>

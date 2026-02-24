<script setup lang="ts">
import OriginalCalendarGridHead from "../../ui/calendar/CalendarGridHead.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCalendarGridHead v-bind="$attrs" data-slot="calendar-grid-head">
        <slot />
    </OriginalCalendarGridHead>
</template>

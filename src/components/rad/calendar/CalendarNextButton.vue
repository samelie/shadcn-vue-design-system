<script setup lang="ts">
import OriginalCalendarNextButton from "../../ui/calendar/CalendarNextButton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCalendarNextButton v-bind="$attrs" data-slot="calendar-next-button">
        <slot />
    </OriginalCalendarNextButton>
</template>

<script setup lang="ts">
import OriginalCalendar from "../../ui/calendar/Calendar.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCalendar v-bind="$attrs" data-slot="calendar">
        <template #default="slotProps">
            <slot v-bind="slotProps" />
        </template>
    </OriginalCalendar>
</template>

<script setup lang="ts">
import OriginalEmptyContent from "../../ui/empty/EmptyContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalEmptyContent v-bind="$attrs" data-slot="empty-content">
        <slot />
    </OriginalEmptyContent>
</template>

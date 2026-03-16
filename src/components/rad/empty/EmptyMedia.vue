<script setup lang="ts">
import OriginalEmptyMedia from "../../ui/empty/EmptyMedia.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalEmptyMedia v-bind="$attrs" data-slot="empty-media">
        <slot />
    </OriginalEmptyMedia>
</template>

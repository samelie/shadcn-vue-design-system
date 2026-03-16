<script setup lang="ts">
import OriginalEmptyTitle from "../../ui/empty/EmptyTitle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalEmptyTitle v-bind="$attrs" data-slot="empty-title">
        <slot />
    </OriginalEmptyTitle>
</template>

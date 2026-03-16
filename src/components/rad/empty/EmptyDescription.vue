<script setup lang="ts">
import OriginalEmptyDescription from "../../ui/empty/EmptyDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalEmptyDescription v-bind="$attrs" data-slot="empty-description">
        <slot />
    </OriginalEmptyDescription>
</template>

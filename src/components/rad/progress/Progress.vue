<script setup lang="ts">
import OriginalProgress from "../../ui/progress/Progress.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalProgress v-bind="$attrs" data-slot="progress">
        <slot />
    </OriginalProgress>
</template>

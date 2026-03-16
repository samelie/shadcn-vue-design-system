<script setup lang="ts">
import OriginalBadge from "../../ui/badge/Badge.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalBadge v-bind="$attrs" data-slot="badge">
        <slot />
    </OriginalBadge>
</template>

<script setup lang="ts">
import OriginalHoverCardTrigger from "../../ui/hover-card/HoverCardTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalHoverCardTrigger v-bind="$attrs" data-slot="hover-card-trigger">
        <slot />
    </OriginalHoverCardTrigger>
</template>

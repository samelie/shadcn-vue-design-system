<script setup lang="ts">
import OriginalHoverCardContent from "../../ui/hover-card/HoverCardContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalHoverCardContent v-bind="$attrs" data-slot="hover-card-content">
        <slot />
    </OriginalHoverCardContent>
</template>

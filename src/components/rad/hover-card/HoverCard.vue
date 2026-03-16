<script setup lang="ts">
import OriginalHoverCard from "../../ui/hover-card/HoverCard.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalHoverCard v-bind="$attrs" data-slot="hover-card">
        <slot />
    </OriginalHoverCard>
</template>

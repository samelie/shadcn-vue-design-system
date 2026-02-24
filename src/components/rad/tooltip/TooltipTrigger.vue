<script setup lang="ts">
import OriginalTooltipTrigger from "../../ui/tooltip/TooltipTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTooltipTrigger v-bind="$attrs" data-slot="tooltip-trigger">
        <slot />
    </OriginalTooltipTrigger>
</template>

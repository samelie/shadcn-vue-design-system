<script setup lang="ts">
import OriginalTooltipProvider from "../../ui/tooltip/TooltipProvider.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTooltipProvider v-bind="$attrs" data-slot="tooltip-provider">
        <slot />
    </OriginalTooltipProvider>
</template>

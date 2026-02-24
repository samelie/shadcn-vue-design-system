<script setup lang="ts">
import OriginalTooltipContent from "../../ui/tooltip/TooltipContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTooltipContent v-bind="$attrs" data-slot="tooltip-content">
        <slot />
    </OriginalTooltipContent>
</template>

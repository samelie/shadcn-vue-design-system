<script setup lang="ts">
import OriginalPopoverContent from "../../ui/popover/PopoverContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPopoverContent v-bind="$attrs" data-slot="popover-content">
        <slot />
    </OriginalPopoverContent>
</template>

<script setup lang="ts">
import OriginalContextMenuLabel from "../../ui/context-menu/ContextMenuLabel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuLabel v-bind="$attrs" data-slot="context-menu-label">
        <slot />
    </OriginalContextMenuLabel>
</template>

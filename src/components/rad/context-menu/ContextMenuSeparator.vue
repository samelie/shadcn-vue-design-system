<script setup lang="ts">
import OriginalContextMenuSeparator from "../../ui/context-menu/ContextMenuSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuSeparator v-bind="$attrs" data-slot="context-menu-separator">
        <slot />
    </OriginalContextMenuSeparator>
</template>

<script setup lang="ts">
import OriginalContextMenuItem from "../../ui/context-menu/ContextMenuItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuItem v-bind="$attrs" data-slot="context-menu-item">
        <slot />
    </OriginalContextMenuItem>
</template>

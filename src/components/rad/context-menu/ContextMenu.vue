<script setup lang="ts">
import OriginalContextMenu from "../../ui/context-menu/ContextMenu.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenu v-bind="$attrs" data-slot="context-menu">
        <slot />
    </OriginalContextMenu>
</template>

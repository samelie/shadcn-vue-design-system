<script setup lang="ts">
import OriginalContextMenuShortcut from "../../ui/context-menu/ContextMenuShortcut.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuShortcut v-bind="$attrs" data-slot="context-menu-shortcut">
        <slot />
    </OriginalContextMenuShortcut>
</template>

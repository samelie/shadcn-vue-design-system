<script setup lang="ts">
import OriginalContextMenuSubContent from "../../ui/context-menu/ContextMenuSubContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuSubContent v-bind="$attrs" data-slot="context-menu-sub-content">
        <slot />
    </OriginalContextMenuSubContent>
</template>

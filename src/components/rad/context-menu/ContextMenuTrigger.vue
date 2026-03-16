<script setup lang="ts">
import OriginalContextMenuTrigger from "../../ui/context-menu/ContextMenuTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuTrigger v-bind="$attrs" data-slot="context-menu-trigger">
        <slot />
    </OriginalContextMenuTrigger>
</template>

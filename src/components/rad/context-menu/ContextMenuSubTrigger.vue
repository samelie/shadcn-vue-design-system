<script setup lang="ts">
import OriginalContextMenuSubTrigger from "../../ui/context-menu/ContextMenuSubTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuSubTrigger v-bind="$attrs" data-slot="context-menu-sub-trigger">
        <slot />
    </OriginalContextMenuSubTrigger>
</template>

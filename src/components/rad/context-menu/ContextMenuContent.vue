<script setup lang="ts">
import OriginalContextMenuContent from "../../ui/context-menu/ContextMenuContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuContent v-bind="$attrs" data-slot="context-menu-content">
        <slot />
    </OriginalContextMenuContent>
</template>

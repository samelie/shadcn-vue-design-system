<script setup lang="ts">
import OriginalContextMenuPortal from "../../ui/context-menu/ContextMenuPortal.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuPortal v-bind="$attrs" data-slot="context-menu-portal">
        <slot />
    </OriginalContextMenuPortal>
</template>

<script setup lang="ts">
import OriginalContextMenuSub from "../../ui/context-menu/ContextMenuSub.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuSub v-bind="$attrs" data-slot="context-menu-sub">
        <slot />
    </OriginalContextMenuSub>
</template>

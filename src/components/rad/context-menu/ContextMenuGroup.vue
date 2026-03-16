<script setup lang="ts">
import OriginalContextMenuGroup from "../../ui/context-menu/ContextMenuGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuGroup v-bind="$attrs" data-slot="context-menu-group">
        <slot />
    </OriginalContextMenuGroup>
</template>

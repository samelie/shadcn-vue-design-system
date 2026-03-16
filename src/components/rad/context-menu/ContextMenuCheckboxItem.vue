<script setup lang="ts">
import OriginalContextMenuCheckboxItem from "../../ui/context-menu/ContextMenuCheckboxItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuCheckboxItem v-bind="$attrs" data-slot="context-menu-checkbox-item">
        <slot />
    </OriginalContextMenuCheckboxItem>
</template>

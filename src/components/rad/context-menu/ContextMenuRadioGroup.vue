<script setup lang="ts">
import OriginalContextMenuRadioGroup from "../../ui/context-menu/ContextMenuRadioGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalContextMenuRadioGroup v-bind="$attrs" data-slot="context-menu-radio-group">
        <slot />
    </OriginalContextMenuRadioGroup>
</template>

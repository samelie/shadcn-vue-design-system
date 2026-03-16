<script setup lang="ts">
import OriginalResizablePanel from "../../ui/resizable/ResizablePanel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalResizablePanel v-bind="$attrs" data-slot="resizable-panel">
        <slot />
    </OriginalResizablePanel>
</template>

<script setup lang="ts">
import OriginalResizableHandle from "../../ui/resizable/ResizableHandle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalResizableHandle v-bind="$attrs" data-slot="resizable-handle">
        <slot />
    </OriginalResizableHandle>
</template>

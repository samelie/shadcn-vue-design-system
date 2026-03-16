<script setup lang="ts">
import OriginalScrollBar from "../../ui/scroll-area/ScrollBar.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalScrollBar v-bind="$attrs" data-slot="scroll-bar">
        <slot />
    </OriginalScrollBar>
</template>

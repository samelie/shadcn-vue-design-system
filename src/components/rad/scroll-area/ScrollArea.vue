<script setup lang="ts">
import OriginalScrollArea from "../../ui/scroll-area/ScrollArea.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalScrollArea v-bind="$attrs" data-slot="scroll-area">
        <slot />
    </OriginalScrollArea>
</template>

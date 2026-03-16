<script setup lang="ts">
import OriginalSheetOverlay from "../../ui/sheet/SheetOverlay.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheetOverlay v-bind="$attrs" data-slot="sheet-overlay">
        <slot />
    </OriginalSheetOverlay>
</template>

<script setup lang="ts">
import OriginalSheetContent from "../../ui/sheet/SheetContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheetContent v-bind="$attrs" data-slot="sheet-content">
        <slot />
    </OriginalSheetContent>
</template>

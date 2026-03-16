<script setup lang="ts">
import OriginalSheetDescription from "../../ui/sheet/SheetDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheetDescription v-bind="$attrs" data-slot="sheet-description">
        <slot />
    </OriginalSheetDescription>
</template>

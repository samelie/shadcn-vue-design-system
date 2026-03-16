<script setup lang="ts">
import OriginalSheetHeader from "../../ui/sheet/SheetHeader.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheetHeader v-bind="$attrs" data-slot="sheet-header">
        <slot />
    </OriginalSheetHeader>
</template>

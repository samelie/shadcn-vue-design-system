<script setup lang="ts">
import OriginalSheetTitle from "../../ui/sheet/SheetTitle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheetTitle v-bind="$attrs" data-slot="sheet-title">
        <slot />
    </OriginalSheetTitle>
</template>

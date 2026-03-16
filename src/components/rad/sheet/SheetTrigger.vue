<script setup lang="ts">
import OriginalSheetTrigger from "../../ui/sheet/SheetTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheetTrigger v-bind="$attrs" data-slot="sheet-trigger">
        <slot />
    </OriginalSheetTrigger>
</template>

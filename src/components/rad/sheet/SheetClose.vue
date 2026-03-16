<script setup lang="ts">
import OriginalSheetClose from "../../ui/sheet/SheetClose.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheetClose v-bind="$attrs" data-slot="sheet-close">
        <slot />
    </OriginalSheetClose>
</template>

<script setup lang="ts">
import OriginalSheetFooter from "../../ui/sheet/SheetFooter.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheetFooter v-bind="$attrs" data-slot="sheet-footer">
        <slot />
    </OriginalSheetFooter>
</template>

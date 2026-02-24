<script setup lang="ts">
import OriginalDialogContent from "../../ui/dialog/DialogContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDialogContent v-bind="$attrs" data-slot="dialog-content">
        <slot />
    </OriginalDialogContent>
</template>

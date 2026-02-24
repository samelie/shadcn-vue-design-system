<script setup lang="ts">
import OriginalDialogHeader from "../../ui/dialog/DialogHeader.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDialogHeader v-bind="$attrs" data-slot="dialog-header">
        <slot />
    </OriginalDialogHeader>
</template>

<script setup lang="ts">
import OriginalAlertDialogHeader from "../../ui/alert-dialog/AlertDialogHeader.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialogHeader v-bind="$attrs" data-slot="alert-dialog-header">
        <slot />
    </OriginalAlertDialogHeader>
</template>

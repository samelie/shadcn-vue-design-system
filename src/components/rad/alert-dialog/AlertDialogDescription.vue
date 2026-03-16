<script setup lang="ts">
import OriginalAlertDialogDescription from "../../ui/alert-dialog/AlertDialogDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialogDescription v-bind="$attrs" data-slot="alert-dialog-description">
        <slot />
    </OriginalAlertDialogDescription>
</template>

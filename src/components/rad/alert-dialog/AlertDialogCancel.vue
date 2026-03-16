<script setup lang="ts">
import OriginalAlertDialogCancel from "../../ui/alert-dialog/AlertDialogCancel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialogCancel v-bind="$attrs" data-slot="alert-dialog-cancel">
        <slot />
    </OriginalAlertDialogCancel>
</template>

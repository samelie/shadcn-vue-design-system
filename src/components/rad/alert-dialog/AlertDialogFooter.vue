<script setup lang="ts">
import OriginalAlertDialogFooter from "../../ui/alert-dialog/AlertDialogFooter.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialogFooter v-bind="$attrs" data-slot="alert-dialog-footer">
        <slot />
    </OriginalAlertDialogFooter>
</template>

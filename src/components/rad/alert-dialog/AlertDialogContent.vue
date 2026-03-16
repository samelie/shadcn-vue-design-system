<script setup lang="ts">
import OriginalAlertDialogContent from "../../ui/alert-dialog/AlertDialogContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialogContent v-bind="$attrs" data-slot="alert-dialog-content">
        <slot />
    </OriginalAlertDialogContent>
</template>

<script setup lang="ts">
import OriginalAlertDialogTitle from "../../ui/alert-dialog/AlertDialogTitle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialogTitle v-bind="$attrs" data-slot="alert-dialog-title">
        <slot />
    </OriginalAlertDialogTitle>
</template>

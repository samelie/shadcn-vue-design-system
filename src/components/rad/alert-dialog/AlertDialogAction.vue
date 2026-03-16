<script setup lang="ts">
import OriginalAlertDialogAction from "../../ui/alert-dialog/AlertDialogAction.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialogAction v-bind="$attrs" data-slot="alert-dialog-action">
        <slot />
    </OriginalAlertDialogAction>
</template>

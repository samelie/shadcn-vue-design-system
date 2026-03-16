<script setup lang="ts">
import OriginalAlertDialogTrigger from "../../ui/alert-dialog/AlertDialogTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialogTrigger v-bind="$attrs" data-slot="alert-dialog-trigger">
        <slot />
    </OriginalAlertDialogTrigger>
</template>

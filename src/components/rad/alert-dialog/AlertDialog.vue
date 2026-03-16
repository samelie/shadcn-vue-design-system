<script setup lang="ts">
import OriginalAlertDialog from "../../ui/alert-dialog/AlertDialog.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDialog v-bind="$attrs" data-slot="alert-dialog">
        <slot />
    </OriginalAlertDialog>
</template>

<script setup lang="ts">
import OriginalDialogDescription from "../../ui/dialog/DialogDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDialogDescription v-bind="$attrs" data-slot="dialog-description">
        <slot />
    </OriginalDialogDescription>
</template>

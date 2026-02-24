<script setup lang="ts">
import OriginalDialogScrollContent from "../../ui/dialog/DialogScrollContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDialogScrollContent v-bind="$attrs" data-slot="dialog-scroll-content">
        <slot />
    </OriginalDialogScrollContent>
</template>

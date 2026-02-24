<script setup lang="ts">
import OriginalDialogTrigger from "../../ui/dialog/DialogTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDialogTrigger v-bind="$attrs" data-slot="dialog-trigger">
        <slot />
    </OriginalDialogTrigger>
</template>

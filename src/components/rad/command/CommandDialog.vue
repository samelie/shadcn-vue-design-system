<script setup lang="ts">
import OriginalCommandDialog from "../../ui/command/CommandDialog.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCommandDialog v-bind="$attrs" data-slot="command-dialog">
        <slot />
    </OriginalCommandDialog>
</template>

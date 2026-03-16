<script setup lang="ts">
import OriginalMenubarLabel from "../../ui/menubar/MenubarLabel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarLabel v-bind="$attrs" data-slot="menubar-label">
        <slot />
    </OriginalMenubarLabel>
</template>

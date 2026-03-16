<script setup lang="ts">
import OriginalMenubarSeparator from "../../ui/menubar/MenubarSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarSeparator v-bind="$attrs" data-slot="menubar-separator">
        <slot />
    </OriginalMenubarSeparator>
</template>

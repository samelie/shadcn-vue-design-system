<script setup lang="ts">
import OriginalMenubarShortcut from "../../ui/menubar/MenubarShortcut.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarShortcut v-bind="$attrs" data-slot="menubar-shortcut">
        <slot />
    </OriginalMenubarShortcut>
</template>

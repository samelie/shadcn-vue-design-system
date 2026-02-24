<script setup lang="ts">
import OriginalCommandShortcut from "../../ui/command/CommandShortcut.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCommandShortcut v-bind="$attrs" data-slot="command-shortcut">
        <slot />
    </OriginalCommandShortcut>
</template>

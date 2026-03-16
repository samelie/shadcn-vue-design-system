<script setup lang="ts">
import OriginalMenubar from "../../ui/menubar/Menubar.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubar v-bind="$attrs" data-slot="menubar">
        <slot />
    </OriginalMenubar>
</template>

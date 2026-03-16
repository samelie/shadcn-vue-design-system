<script setup lang="ts">
import OriginalMenubarMenu from "../../ui/menubar/MenubarMenu.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarMenu v-bind="$attrs" data-slot="menubar-menu">
        <slot />
    </OriginalMenubarMenu>
</template>

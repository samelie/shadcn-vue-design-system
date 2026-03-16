<script setup lang="ts">
import OriginalNavigationMenuItem from "../../ui/navigation-menu/NavigationMenuItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNavigationMenuItem v-bind="$attrs" data-slot="navigation-menu-item">
        <slot />
    </OriginalNavigationMenuItem>
</template>

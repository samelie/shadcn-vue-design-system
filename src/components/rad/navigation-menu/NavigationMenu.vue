<script setup lang="ts">
import OriginalNavigationMenu from "../../ui/navigation-menu/NavigationMenu.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNavigationMenu v-bind="$attrs" data-slot="navigation-menu">
        <slot />
    </OriginalNavigationMenu>
</template>

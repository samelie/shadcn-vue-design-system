<script setup lang="ts">
import OriginalNavigationMenuViewport from "../../ui/navigation-menu/NavigationMenuViewport.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNavigationMenuViewport v-bind="$attrs" data-slot="navigation-menu-viewport">
        <slot />
    </OriginalNavigationMenuViewport>
</template>

<script setup lang="ts">
import OriginalNavigationMenuLink from "../../ui/navigation-menu/NavigationMenuLink.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNavigationMenuLink v-bind="$attrs" data-slot="navigation-menu-link">
        <slot />
    </OriginalNavigationMenuLink>
</template>

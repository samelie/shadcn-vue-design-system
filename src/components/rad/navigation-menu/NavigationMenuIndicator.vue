<script setup lang="ts">
import OriginalNavigationMenuIndicator from "../../ui/navigation-menu/NavigationMenuIndicator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNavigationMenuIndicator v-bind="$attrs" data-slot="navigation-menu-indicator">
        <slot />
    </OriginalNavigationMenuIndicator>
</template>

<script setup lang="ts">
import OriginalNavigationMenuContent from "../../ui/navigation-menu/NavigationMenuContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNavigationMenuContent v-bind="$attrs" data-slot="navigation-menu-content">
        <slot />
    </OriginalNavigationMenuContent>
</template>

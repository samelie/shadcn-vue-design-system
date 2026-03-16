<script setup lang="ts">
import OriginalNavigationMenuTrigger from "../../ui/navigation-menu/NavigationMenuTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNavigationMenuTrigger v-bind="$attrs" data-slot="navigation-menu-trigger">
        <slot />
    </OriginalNavigationMenuTrigger>
</template>

<script setup lang="ts">
import OriginalNavigationMenuList from "../../ui/navigation-menu/NavigationMenuList.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNavigationMenuList v-bind="$attrs" data-slot="navigation-menu-list">
        <slot />
    </OriginalNavigationMenuList>
</template>

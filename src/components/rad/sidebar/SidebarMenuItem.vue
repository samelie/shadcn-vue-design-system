<script setup lang="ts">
import OriginalSidebarMenuItem from "../../ui/sidebar/SidebarMenuItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuItem v-bind="$attrs" data-slot="sidebar-menu-item">
        <slot />
    </OriginalSidebarMenuItem>
</template>

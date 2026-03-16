<script setup lang="ts">
import OriginalSidebarMenuBadge from "../../ui/sidebar/SidebarMenuBadge.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuBadge v-bind="$attrs" data-slot="sidebar-menu-badge">
        <slot />
    </OriginalSidebarMenuBadge>
</template>

<script setup lang="ts">
import OriginalSidebarMenuSkeleton from "../../ui/sidebar/SidebarMenuSkeleton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuSkeleton v-bind="$attrs" data-slot="sidebar-menu-skeleton">
        <slot />
    </OriginalSidebarMenuSkeleton>
</template>

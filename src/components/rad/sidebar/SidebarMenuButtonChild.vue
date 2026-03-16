<script setup lang="ts">
import OriginalSidebarMenuButtonChild from "../../ui/sidebar/SidebarMenuButtonChild.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuButtonChild v-bind="$attrs" data-slot="sidebar-menu-button-child">
        <slot />
    </OriginalSidebarMenuButtonChild>
</template>

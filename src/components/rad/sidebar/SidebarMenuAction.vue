<script setup lang="ts">
import OriginalSidebarMenuAction from "../../ui/sidebar/SidebarMenuAction.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuAction v-bind="$attrs" data-slot="sidebar-menu-action">
        <slot />
    </OriginalSidebarMenuAction>
</template>

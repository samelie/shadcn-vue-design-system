<script setup lang="ts">
import OriginalSidebarMenuButton from "../../ui/sidebar/SidebarMenuButton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuButton v-bind="$attrs" data-slot="sidebar-menu-button">
        <slot />
    </OriginalSidebarMenuButton>
</template>

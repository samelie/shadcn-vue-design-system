<script setup lang="ts">
import OriginalSidebarMenuSubItem from "../../ui/sidebar/SidebarMenuSubItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuSubItem v-bind="$attrs" data-slot="sidebar-menu-sub-item">
        <slot />
    </OriginalSidebarMenuSubItem>
</template>

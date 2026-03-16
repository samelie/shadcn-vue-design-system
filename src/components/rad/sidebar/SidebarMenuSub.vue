<script setup lang="ts">
import OriginalSidebarMenuSub from "../../ui/sidebar/SidebarMenuSub.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuSub v-bind="$attrs" data-slot="sidebar-menu-sub">
        <slot />
    </OriginalSidebarMenuSub>
</template>

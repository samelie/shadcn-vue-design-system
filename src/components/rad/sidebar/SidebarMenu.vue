<script setup lang="ts">
import OriginalSidebarMenu from "../../ui/sidebar/SidebarMenu.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenu v-bind="$attrs" data-slot="sidebar-menu">
        <slot />
    </OriginalSidebarMenu>
</template>

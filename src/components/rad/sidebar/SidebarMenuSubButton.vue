<script setup lang="ts">
import OriginalSidebarMenuSubButton from "../../ui/sidebar/SidebarMenuSubButton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarMenuSubButton v-bind="$attrs" data-slot="sidebar-menu-sub-button">
        <slot />
    </OriginalSidebarMenuSubButton>
</template>

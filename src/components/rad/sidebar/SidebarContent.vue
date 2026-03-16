<script setup lang="ts">
import OriginalSidebarContent from "../../ui/sidebar/SidebarContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarContent v-bind="$attrs" data-slot="sidebar-content">
        <slot />
    </OriginalSidebarContent>
</template>

<script setup lang="ts">
import OriginalSidebarHeader from "../../ui/sidebar/SidebarHeader.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarHeader v-bind="$attrs" data-slot="sidebar-header">
        <slot />
    </OriginalSidebarHeader>
</template>

<script setup lang="ts">
import OriginalSidebarGroupContent from "../../ui/sidebar/SidebarGroupContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarGroupContent v-bind="$attrs" data-slot="sidebar-group-content">
        <slot />
    </OriginalSidebarGroupContent>
</template>

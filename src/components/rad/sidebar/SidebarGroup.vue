<script setup lang="ts">
import OriginalSidebarGroup from "../../ui/sidebar/SidebarGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarGroup v-bind="$attrs" data-slot="sidebar-group">
        <slot />
    </OriginalSidebarGroup>
</template>

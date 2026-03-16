<script setup lang="ts">
import OriginalSidebarGroupLabel from "../../ui/sidebar/SidebarGroupLabel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarGroupLabel v-bind="$attrs" data-slot="sidebar-group-label">
        <slot />
    </OriginalSidebarGroupLabel>
</template>

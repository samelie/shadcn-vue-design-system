<script setup lang="ts">
import OriginalSidebarRail from "../../ui/sidebar/SidebarRail.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarRail v-bind="$attrs" data-slot="sidebar-rail">
        <slot />
    </OriginalSidebarRail>
</template>

<script setup lang="ts">
import OriginalSidebarFooter from "../../ui/sidebar/SidebarFooter.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarFooter v-bind="$attrs" data-slot="sidebar-footer">
        <slot />
    </OriginalSidebarFooter>
</template>

<script setup lang="ts">
import OriginalSidebarSeparator from "../../ui/sidebar/SidebarSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarSeparator v-bind="$attrs" data-slot="sidebar-separator">
        <slot />
    </OriginalSidebarSeparator>
</template>

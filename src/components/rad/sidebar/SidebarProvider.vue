<script setup lang="ts">
import OriginalSidebarProvider from "../../ui/sidebar/SidebarProvider.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarProvider v-bind="$attrs" data-slot="sidebar-provider">
        <slot />
    </OriginalSidebarProvider>
</template>

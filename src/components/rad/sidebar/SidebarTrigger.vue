<script setup lang="ts">
import OriginalSidebarTrigger from "../../ui/sidebar/SidebarTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarTrigger v-bind="$attrs" data-slot="sidebar-trigger">
        <slot />
    </OriginalSidebarTrigger>
</template>

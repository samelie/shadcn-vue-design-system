<script setup lang="ts">
import OriginalSidebar from "../../ui/sidebar/Sidebar.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebar v-bind="$attrs" data-slot="sidebar">
        <slot />
    </OriginalSidebar>
</template>

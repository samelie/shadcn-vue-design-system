<script setup lang="ts">
import OriginalSidebarInset from "../../ui/sidebar/SidebarInset.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarInset v-bind="$attrs" data-slot="sidebar-inset">
        <slot />
    </OriginalSidebarInset>
</template>

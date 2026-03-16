<script setup lang="ts">
import OriginalSidebarGroupAction from "../../ui/sidebar/SidebarGroupAction.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarGroupAction v-bind="$attrs" data-slot="sidebar-group-action">
        <slot />
    </OriginalSidebarGroupAction>
</template>

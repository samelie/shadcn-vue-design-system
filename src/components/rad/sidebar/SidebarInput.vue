<script setup lang="ts">
import OriginalSidebarInput from "../../ui/sidebar/SidebarInput.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSidebarInput v-bind="$attrs" data-slot="sidebar-input">
        <slot />
    </OriginalSidebarInput>
</template>

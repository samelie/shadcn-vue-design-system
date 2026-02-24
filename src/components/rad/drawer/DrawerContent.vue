<script setup lang="ts">
import OriginalDrawerContent from "../../ui/drawer/DrawerContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDrawerContent v-bind="$attrs" data-slot="drawer-content">
        <slot />
    </OriginalDrawerContent>
</template>

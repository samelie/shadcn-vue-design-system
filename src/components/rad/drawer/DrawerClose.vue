<script setup lang="ts">
import OriginalDrawerClose from "../../ui/drawer/DrawerClose.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDrawerClose v-bind="$attrs" data-slot="drawer-close">
        <slot />
    </OriginalDrawerClose>
</template>

<script setup lang="ts">
import OriginalDrawerDescription from "../../ui/drawer/DrawerDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDrawerDescription v-bind="$attrs" data-slot="drawer-description">
        <slot />
    </OriginalDrawerDescription>
</template>

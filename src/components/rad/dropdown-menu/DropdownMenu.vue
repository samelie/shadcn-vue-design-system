<script setup lang="ts">
import OriginalDropdownMenu from "../../ui/dropdown-menu/DropdownMenu.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDropdownMenu v-bind="$attrs" data-slot="dropdown-menu">
        <slot />
    </OriginalDropdownMenu>
</template>

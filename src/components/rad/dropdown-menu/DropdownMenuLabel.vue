<script setup lang="ts">
import OriginalDropdownMenuLabel from "../../ui/dropdown-menu/DropdownMenuLabel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDropdownMenuLabel v-bind="$attrs" data-slot="dropdown-menu-label">
        <slot />
    </OriginalDropdownMenuLabel>
</template>

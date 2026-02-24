<script setup lang="ts">
import OriginalDropdownMenuGroup from "../../ui/dropdown-menu/DropdownMenuGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDropdownMenuGroup v-bind="$attrs" data-slot="dropdown-menu-group">
        <slot />
    </OriginalDropdownMenuGroup>
</template>

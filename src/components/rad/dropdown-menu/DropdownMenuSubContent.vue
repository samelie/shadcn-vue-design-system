<script setup lang="ts">
import OriginalDropdownMenuSubContent from "../../ui/dropdown-menu/DropdownMenuSubContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDropdownMenuSubContent v-bind="$attrs" data-slot="dropdown-menu-sub-content">
        <slot />
    </OriginalDropdownMenuSubContent>
</template>

<script setup lang="ts">
import OriginalDropdownMenuSub from "../../ui/dropdown-menu/DropdownMenuSub.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalDropdownMenuSub v-bind="$attrs" data-slot="dropdown-menu-sub">
        <slot />
    </OriginalDropdownMenuSub>
</template>

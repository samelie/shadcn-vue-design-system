<script setup lang="ts">
import OriginalMenubarItem from "../../ui/menubar/MenubarItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarItem v-bind="$attrs" data-slot="menubar-item">
        <slot />
    </OriginalMenubarItem>
</template>

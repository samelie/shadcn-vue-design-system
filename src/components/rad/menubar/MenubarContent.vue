<script setup lang="ts">
import OriginalMenubarContent from "../../ui/menubar/MenubarContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarContent v-bind="$attrs" data-slot="menubar-content">
        <slot />
    </OriginalMenubarContent>
</template>

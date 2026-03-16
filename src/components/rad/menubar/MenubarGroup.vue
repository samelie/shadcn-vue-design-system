<script setup lang="ts">
import OriginalMenubarGroup from "../../ui/menubar/MenubarGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarGroup v-bind="$attrs" data-slot="menubar-group">
        <slot />
    </OriginalMenubarGroup>
</template>

<script setup lang="ts">
import OriginalMenubarSubContent from "../../ui/menubar/MenubarSubContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarSubContent v-bind="$attrs" data-slot="menubar-sub-content">
        <slot />
    </OriginalMenubarSubContent>
</template>

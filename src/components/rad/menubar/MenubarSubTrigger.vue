<script setup lang="ts">
import OriginalMenubarSubTrigger from "../../ui/menubar/MenubarSubTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarSubTrigger v-bind="$attrs" data-slot="menubar-sub-trigger">
        <slot />
    </OriginalMenubarSubTrigger>
</template>

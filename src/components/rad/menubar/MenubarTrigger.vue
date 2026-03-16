<script setup lang="ts">
import OriginalMenubarTrigger from "../../ui/menubar/MenubarTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarTrigger v-bind="$attrs" data-slot="menubar-trigger">
        <slot />
    </OriginalMenubarTrigger>
</template>

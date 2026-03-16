<script setup lang="ts">
import OriginalMenubarCheckboxItem from "../../ui/menubar/MenubarCheckboxItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarCheckboxItem v-bind="$attrs" data-slot="menubar-checkbox-item">
        <slot />
    </OriginalMenubarCheckboxItem>
</template>

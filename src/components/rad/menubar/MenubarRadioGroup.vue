<script setup lang="ts">
import OriginalMenubarRadioGroup from "../../ui/menubar/MenubarRadioGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalMenubarRadioGroup v-bind="$attrs" data-slot="menubar-radio-group">
        <slot />
    </OriginalMenubarRadioGroup>
</template>

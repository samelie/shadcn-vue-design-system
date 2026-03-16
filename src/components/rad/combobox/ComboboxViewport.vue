<script setup lang="ts">
import OriginalComboboxViewport from "../../ui/combobox/ComboboxViewport.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxViewport v-bind="$attrs" data-slot="combobox-viewport">
        <slot />
    </OriginalComboboxViewport>
</template>

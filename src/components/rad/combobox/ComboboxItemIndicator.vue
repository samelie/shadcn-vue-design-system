<script setup lang="ts">
import OriginalComboboxItemIndicator from "../../ui/combobox/ComboboxItemIndicator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxItemIndicator v-bind="$attrs" data-slot="combobox-item-indicator">
        <slot />
    </OriginalComboboxItemIndicator>
</template>

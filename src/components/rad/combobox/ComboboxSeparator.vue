<script setup lang="ts">
import OriginalComboboxSeparator from "../../ui/combobox/ComboboxSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxSeparator v-bind="$attrs" data-slot="combobox-separator">
        <slot />
    </OriginalComboboxSeparator>
</template>

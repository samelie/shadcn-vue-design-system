<script setup lang="ts">
import OriginalComboboxInput from "../../ui/combobox/ComboboxInput.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxInput v-bind="$attrs" data-slot="combobox-input">
        <slot />
    </OriginalComboboxInput>
</template>

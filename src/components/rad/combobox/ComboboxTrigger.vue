<script setup lang="ts">
import OriginalComboboxTrigger from "../../ui/combobox/ComboboxTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxTrigger v-bind="$attrs" data-slot="combobox-trigger">
        <slot />
    </OriginalComboboxTrigger>
</template>

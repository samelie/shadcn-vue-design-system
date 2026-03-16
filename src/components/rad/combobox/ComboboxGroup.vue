<script setup lang="ts">
import OriginalComboboxGroup from "../../ui/combobox/ComboboxGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxGroup v-bind="$attrs" data-slot="combobox-group">
        <slot />
    </OriginalComboboxGroup>
</template>

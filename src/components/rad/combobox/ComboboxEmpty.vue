<script setup lang="ts">
import OriginalComboboxEmpty from "../../ui/combobox/ComboboxEmpty.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxEmpty v-bind="$attrs" data-slot="combobox-empty">
        <slot />
    </OriginalComboboxEmpty>
</template>

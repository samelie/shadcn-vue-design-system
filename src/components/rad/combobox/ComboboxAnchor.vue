<script setup lang="ts">
import OriginalComboboxAnchor from "../../ui/combobox/ComboboxAnchor.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxAnchor v-bind="$attrs" data-slot="combobox-anchor">
        <slot />
    </OriginalComboboxAnchor>
</template>

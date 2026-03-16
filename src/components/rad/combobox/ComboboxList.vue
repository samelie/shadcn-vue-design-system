<script setup lang="ts">
import OriginalComboboxList from "../../ui/combobox/ComboboxList.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalComboboxList v-bind="$attrs" data-slot="combobox-list">
        <slot />
    </OriginalComboboxList>
</template>

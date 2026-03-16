<script setup lang="ts">
import OriginalCombobox from "../../ui/combobox/Combobox.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCombobox v-bind="$attrs" data-slot="combobox">
        <slot />
    </OriginalCombobox>
</template>

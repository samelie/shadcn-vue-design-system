<script setup lang="ts">
import OriginalNumberField from "../../ui/number-field/NumberField.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNumberField v-bind="$attrs" data-slot="number-field">
        <slot />
    </OriginalNumberField>
</template>

<script setup lang="ts">
import OriginalNumberFieldInput from "../../ui/number-field/NumberFieldInput.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNumberFieldInput v-bind="$attrs" data-slot="number-field-input">
        <slot />
    </OriginalNumberFieldInput>
</template>

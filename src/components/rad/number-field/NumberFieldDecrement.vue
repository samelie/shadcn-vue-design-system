<script setup lang="ts">
import OriginalNumberFieldDecrement from "../../ui/number-field/NumberFieldDecrement.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNumberFieldDecrement v-bind="$attrs" data-slot="number-field-decrement">
        <slot />
    </OriginalNumberFieldDecrement>
</template>

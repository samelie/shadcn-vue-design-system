<script setup lang="ts">
import OriginalNumberFieldIncrement from "../../ui/number-field/NumberFieldIncrement.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNumberFieldIncrement v-bind="$attrs" data-slot="number-field-increment">
        <slot />
    </OriginalNumberFieldIncrement>
</template>

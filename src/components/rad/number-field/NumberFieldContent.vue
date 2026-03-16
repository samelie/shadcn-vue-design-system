<script setup lang="ts">
import OriginalNumberFieldContent from "../../ui/number-field/NumberFieldContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNumberFieldContent v-bind="$attrs" data-slot="number-field-content">
        <slot />
    </OriginalNumberFieldContent>
</template>

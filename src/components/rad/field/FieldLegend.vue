<script setup lang="ts">
import OriginalFieldLegend from "../../ui/field/FieldLegend.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldLegend v-bind="$attrs" data-slot="field-legend">
        <slot />
    </OriginalFieldLegend>
</template>

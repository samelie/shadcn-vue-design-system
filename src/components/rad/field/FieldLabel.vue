<script setup lang="ts">
import OriginalFieldLabel from "../../ui/field/FieldLabel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldLabel v-bind="$attrs" data-slot="field-label">
        <slot />
    </OriginalFieldLabel>
</template>

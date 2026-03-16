<script setup lang="ts">
import OriginalFieldDescription from "../../ui/field/FieldDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldDescription v-bind="$attrs" data-slot="field-description">
        <slot />
    </OriginalFieldDescription>
</template>

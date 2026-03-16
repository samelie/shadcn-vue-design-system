<script setup lang="ts">
import OriginalFieldContent from "../../ui/field/FieldContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldContent v-bind="$attrs" data-slot="field-content">
        <slot />
    </OriginalFieldContent>
</template>

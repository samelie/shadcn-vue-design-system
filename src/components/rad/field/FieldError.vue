<script setup lang="ts">
import OriginalFieldError from "../../ui/field/FieldError.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldError v-bind="$attrs" data-slot="field-error">
        <slot />
    </OriginalFieldError>
</template>

<script setup lang="ts">
import OriginalFieldGroup from "../../ui/field/FieldGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldGroup v-bind="$attrs" data-slot="field-group">
        <slot />
    </OriginalFieldGroup>
</template>

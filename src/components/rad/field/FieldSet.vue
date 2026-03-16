<script setup lang="ts">
import OriginalFieldSet from "../../ui/field/FieldSet.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldSet v-bind="$attrs" data-slot="field-set">
        <slot />
    </OriginalFieldSet>
</template>

<script setup lang="ts">
import OriginalFieldTitle from "../../ui/field/FieldTitle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldTitle v-bind="$attrs" data-slot="field-title">
        <slot />
    </OriginalFieldTitle>
</template>

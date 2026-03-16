<script setup lang="ts">
import OriginalFieldSeparator from "../../ui/field/FieldSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFieldSeparator v-bind="$attrs" data-slot="field-separator">
        <slot />
    </OriginalFieldSeparator>
</template>

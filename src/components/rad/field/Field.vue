<script setup lang="ts">
import OriginalField from "../../ui/field/Field.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalField v-bind="$attrs" data-slot="field">
        <slot />
    </OriginalField>
</template>

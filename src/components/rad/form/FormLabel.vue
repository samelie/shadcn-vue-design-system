<script setup lang="ts">
import OriginalFormLabel from "../../ui/form/FormLabel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFormLabel v-bind="$attrs" data-slot="form-label">
        <slot />
    </OriginalFormLabel>
</template>

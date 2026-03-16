<script setup lang="ts">
import OriginalFormDescription from "../../ui/form/FormDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFormDescription v-bind="$attrs" data-slot="form-description">
        <slot />
    </OriginalFormDescription>
</template>

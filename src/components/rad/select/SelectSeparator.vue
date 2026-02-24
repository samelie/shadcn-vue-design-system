<script setup lang="ts">
import OriginalSelectSeparator from "../../ui/select/SelectSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectSeparator v-bind="$attrs" data-slot="select-separator" />
</template>

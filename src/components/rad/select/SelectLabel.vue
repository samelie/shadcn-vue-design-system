<script setup lang="ts">
import OriginalSelectLabel from "../../ui/select/SelectLabel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectLabel v-bind="$attrs" data-slot="select-label">
        <slot />
    </OriginalSelectLabel>
</template>

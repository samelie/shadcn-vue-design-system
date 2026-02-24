<script setup lang="ts">
import OriginalSelectTrigger from "../../ui/select/SelectTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectTrigger v-bind="$attrs" data-slot="select-trigger">
        <slot />
    </OriginalSelectTrigger>
</template>

<script setup lang="ts">
import OriginalSelectContent from "../../ui/select/SelectContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectContent v-bind="$attrs" data-slot="select-content">
        <slot />
    </OriginalSelectContent>
</template>

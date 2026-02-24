<script setup lang="ts">
import OriginalSelectValue from "../../ui/select/SelectValue.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectValue v-bind="$attrs" data-slot="select-value">
        <slot />
    </OriginalSelectValue>
</template>

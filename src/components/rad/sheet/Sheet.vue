<script setup lang="ts">
import OriginalSheet from "../../ui/sheet/Sheet.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSheet v-bind="$attrs" data-slot="sheet">
        <slot />
    </OriginalSheet>
</template>

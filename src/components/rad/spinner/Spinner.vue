<script setup lang="ts">
import OriginalSpinner from "../../ui/spinner/Spinner.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSpinner v-bind="$attrs" data-slot="spinner">
        <slot />
    </OriginalSpinner>
</template>

<script setup lang="ts">
import OriginalSelectScrollUpButton from "../../ui/select/SelectScrollUpButton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectScrollUpButton v-bind="$attrs" data-slot="select-scroll-up-button">
        <slot />
    </OriginalSelectScrollUpButton>
</template>

<script setup lang="ts">
import OriginalSelectScrollDownButton from "../../ui/select/SelectScrollDownButton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectScrollDownButton v-bind="$attrs" data-slot="select-scroll-down-button">
        <slot />
    </OriginalSelectScrollDownButton>
</template>

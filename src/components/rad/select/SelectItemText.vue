<script setup lang="ts">
import OriginalSelectItemText from "../../ui/select/SelectItemText.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectItemText v-bind="$attrs" data-slot="select-item-text">
        <slot />
    </OriginalSelectItemText>
</template>

<script setup lang="ts">
import OriginalItemTitle from "../../ui/item/ItemTitle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemTitle v-bind="$attrs" data-slot="item-title">
        <slot />
    </OriginalItemTitle>
</template>

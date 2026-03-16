<script setup lang="ts">
import OriginalItemSeparator from "../../ui/item/ItemSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemSeparator v-bind="$attrs" data-slot="item-separator">
        <slot />
    </OriginalItemSeparator>
</template>

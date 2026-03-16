<script setup lang="ts">
import OriginalItemHeader from "../../ui/item/ItemHeader.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemHeader v-bind="$attrs" data-slot="item-header">
        <slot />
    </OriginalItemHeader>
</template>

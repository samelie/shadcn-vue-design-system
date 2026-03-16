<script setup lang="ts">
import OriginalItemContent from "../../ui/item/ItemContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemContent v-bind="$attrs" data-slot="item-content">
        <slot />
    </OriginalItemContent>
</template>

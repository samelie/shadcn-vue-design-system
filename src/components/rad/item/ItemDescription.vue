<script setup lang="ts">
import OriginalItemDescription from "../../ui/item/ItemDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemDescription v-bind="$attrs" data-slot="item-description">
        <slot />
    </OriginalItemDescription>
</template>

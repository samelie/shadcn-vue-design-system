<script setup lang="ts">
import OriginalItemFooter from "../../ui/item/ItemFooter.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemFooter v-bind="$attrs" data-slot="item-footer">
        <slot />
    </OriginalItemFooter>
</template>

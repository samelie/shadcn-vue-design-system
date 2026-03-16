<script setup lang="ts">
import OriginalItem from "../../ui/item/Item.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItem v-bind="$attrs" data-slot="item">
        <slot />
    </OriginalItem>
</template>

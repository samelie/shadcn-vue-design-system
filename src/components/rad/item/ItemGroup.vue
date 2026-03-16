<script setup lang="ts">
import OriginalItemGroup from "../../ui/item/ItemGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemGroup v-bind="$attrs" data-slot="item-group">
        <slot />
    </OriginalItemGroup>
</template>

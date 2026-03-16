<script setup lang="ts">
import OriginalItemActions from "../../ui/item/ItemActions.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemActions v-bind="$attrs" data-slot="item-actions">
        <slot />
    </OriginalItemActions>
</template>

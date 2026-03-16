<script setup lang="ts">
import OriginalItemMedia from "../../ui/item/ItemMedia.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalItemMedia v-bind="$attrs" data-slot="item-media">
        <slot />
    </OriginalItemMedia>
</template>

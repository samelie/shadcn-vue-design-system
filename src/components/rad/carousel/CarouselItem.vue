<script setup lang="ts">
import OriginalCarouselItem from "../../ui/carousel/CarouselItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCarouselItem v-bind="$attrs" data-slot="carousel-item">
        <slot />
    </OriginalCarouselItem>
</template>

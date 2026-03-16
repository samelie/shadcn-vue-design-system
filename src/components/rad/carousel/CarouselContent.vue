<script setup lang="ts">
import OriginalCarouselContent from "../../ui/carousel/CarouselContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCarouselContent v-bind="$attrs" data-slot="carousel-content">
        <slot />
    </OriginalCarouselContent>
</template>

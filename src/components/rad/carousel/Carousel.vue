<script setup lang="ts">
import OriginalCarousel from "../../ui/carousel/Carousel.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCarousel v-bind="$attrs" data-slot="carousel">
        <slot />
    </OriginalCarousel>
</template>

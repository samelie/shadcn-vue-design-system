<script setup lang="ts">
import OriginalCarouselPrevious from "../../ui/carousel/CarouselPrevious.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCarouselPrevious v-bind="$attrs" data-slot="carousel-previous">
        <slot />
    </OriginalCarouselPrevious>
</template>

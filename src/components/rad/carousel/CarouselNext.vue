<script setup lang="ts">
import OriginalCarouselNext from "../../ui/carousel/CarouselNext.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCarouselNext v-bind="$attrs" data-slot="carousel-next">
        <slot />
    </OriginalCarouselNext>
</template>

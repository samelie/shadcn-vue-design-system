<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { cn } from "~/lib/utils";
import { useCarousel } from "./useCarousel";

defineOptions({
    inheritAttrs: false,
});

const props = defineProps<WithClassAsProps>();

// @ts-expect-error carouselRef is used as template ref but vue-tsc doesn't recognize it
const { carouselRef, orientation } = useCarousel();
</script>

<template>
    <div
        ref="carouselRef"
        data-slot="carousel-content"
        class="overflow-hidden"
    >
        <div
            :class="
                cn(
                    'flex',
                    orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
                    props.class,
                )"
            v-bind="$attrs"
        >
            <slot />
        </div>
    </div>
</template>

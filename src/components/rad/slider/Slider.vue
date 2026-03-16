<script setup lang="ts">
import OriginalSlider from "../../ui/slider/Slider.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSlider v-bind="$attrs" data-slot="slider">
        <slot />
    </OriginalSlider>
</template>

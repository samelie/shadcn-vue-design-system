<script setup lang="ts">
import OriginalAspectRatio from "../../ui/aspect-ratio/AspectRatio.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAspectRatio v-bind="$attrs" data-slot="aspect-ratio">
        <slot />
    </OriginalAspectRatio>
</template>

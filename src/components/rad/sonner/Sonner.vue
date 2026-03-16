<script setup lang="ts">
import OriginalSonner from "../../ui/sonner/Sonner.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSonner v-bind="$attrs" data-slot="sonner">
        <slot />
    </OriginalSonner>
</template>

<script setup lang="ts">
import OriginalKbd from "../../ui/kbd/Kbd.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalKbd v-bind="$attrs" data-slot="kbd">
        <slot />
    </OriginalKbd>
</template>

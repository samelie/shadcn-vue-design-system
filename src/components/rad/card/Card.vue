<script setup lang="ts">
import OriginalCard from "../../ui/card/Card.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCard v-bind="$attrs" data-slot="card">
        <slot />
    </OriginalCard>
</template>

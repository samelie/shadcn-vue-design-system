<script setup lang="ts">
import OriginalCardDescription from "../../ui/card/CardDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCardDescription v-bind="$attrs" data-slot="card-description">
        <slot />
    </OriginalCardDescription>
</template>

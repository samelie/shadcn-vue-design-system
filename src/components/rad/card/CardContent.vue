<script setup lang="ts">
import OriginalCardContent from "../../ui/card/CardContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCardContent v-bind="$attrs" data-slot="card-content">
        <slot />
    </OriginalCardContent>
</template>

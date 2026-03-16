<script setup lang="ts">
import OriginalCardTitle from "../../ui/card/CardTitle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCardTitle v-bind="$attrs" data-slot="card-title">
        <slot />
    </OriginalCardTitle>
</template>

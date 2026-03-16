<script setup lang="ts">
import OriginalCardHeader from "../../ui/card/CardHeader.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCardHeader v-bind="$attrs" data-slot="card-header">
        <slot />
    </OriginalCardHeader>
</template>

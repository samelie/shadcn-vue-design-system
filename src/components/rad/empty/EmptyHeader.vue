<script setup lang="ts">
import OriginalEmptyHeader from "../../ui/empty/EmptyHeader.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalEmptyHeader v-bind="$attrs" data-slot="empty-header">
        <slot />
    </OriginalEmptyHeader>
</template>

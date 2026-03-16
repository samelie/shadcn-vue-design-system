<script setup lang="ts">
import OriginalSkeleton from "../../ui/skeleton/Skeleton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSkeleton v-bind="$attrs" data-slot="skeleton">
        <slot />
    </OriginalSkeleton>
</template>

<script setup lang="ts">
import OriginalBreadcrumbLink from "../../ui/breadcrumb/BreadcrumbLink.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalBreadcrumbLink v-bind="$attrs" data-slot="breadcrumb-link">
        <slot />
    </OriginalBreadcrumbLink>
</template>

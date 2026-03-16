<script setup lang="ts">
import OriginalBreadcrumbSeparator from "../../ui/breadcrumb/BreadcrumbSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalBreadcrumbSeparator v-bind="$attrs" data-slot="breadcrumb-separator">
        <slot />
    </OriginalBreadcrumbSeparator>
</template>

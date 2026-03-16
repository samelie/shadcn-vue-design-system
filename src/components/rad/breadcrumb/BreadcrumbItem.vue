<script setup lang="ts">
import OriginalBreadcrumbItem from "../../ui/breadcrumb/BreadcrumbItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalBreadcrumbItem v-bind="$attrs" data-slot="breadcrumb-item">
        <slot />
    </OriginalBreadcrumbItem>
</template>

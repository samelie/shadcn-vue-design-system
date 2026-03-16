<script setup lang="ts">
import OriginalBreadcrumbList from "../../ui/breadcrumb/BreadcrumbList.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalBreadcrumbList v-bind="$attrs" data-slot="breadcrumb-list">
        <slot />
    </OriginalBreadcrumbList>
</template>

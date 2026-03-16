<script setup lang="ts">
import OriginalBreadcrumbPage from "../../ui/breadcrumb/BreadcrumbPage.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalBreadcrumbPage v-bind="$attrs" data-slot="breadcrumb-page">
        <slot />
    </OriginalBreadcrumbPage>
</template>

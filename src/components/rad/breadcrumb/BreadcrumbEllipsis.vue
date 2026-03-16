<script setup lang="ts">
import OriginalBreadcrumbEllipsis from "../../ui/breadcrumb/BreadcrumbEllipsis.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalBreadcrumbEllipsis v-bind="$attrs" data-slot="breadcrumb-ellipsis">
        <slot />
    </OriginalBreadcrumbEllipsis>
</template>

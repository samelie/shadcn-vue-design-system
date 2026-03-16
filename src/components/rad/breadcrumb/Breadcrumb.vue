<script setup lang="ts">
import OriginalBreadcrumb from "../../ui/breadcrumb/Breadcrumb.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalBreadcrumb v-bind="$attrs" data-slot="breadcrumb">
        <slot />
    </OriginalBreadcrumb>
</template>

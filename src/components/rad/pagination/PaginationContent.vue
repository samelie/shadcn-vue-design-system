<script setup lang="ts">
import OriginalPaginationContent from "../../ui/pagination/PaginationContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPaginationContent v-bind="$attrs" data-slot="pagination-content">
        <slot />
    </OriginalPaginationContent>
</template>

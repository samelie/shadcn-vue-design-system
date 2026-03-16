<script setup lang="ts">
import OriginalPaginationNext from "../../ui/pagination/PaginationNext.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPaginationNext v-bind="$attrs" data-slot="pagination-next">
        <slot />
    </OriginalPaginationNext>
</template>

<script setup lang="ts">
import OriginalPaginationPrevious from "../../ui/pagination/PaginationPrevious.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPaginationPrevious v-bind="$attrs" data-slot="pagination-previous">
        <slot />
    </OriginalPaginationPrevious>
</template>

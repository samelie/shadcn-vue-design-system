<script setup lang="ts">
import OriginalPaginationEllipsis from "../../ui/pagination/PaginationEllipsis.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPaginationEllipsis v-bind="$attrs" data-slot="pagination-ellipsis">
        <slot />
    </OriginalPaginationEllipsis>
</template>

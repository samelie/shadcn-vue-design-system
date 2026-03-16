<script setup lang="ts">
import OriginalPaginationFirst from "../../ui/pagination/PaginationFirst.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPaginationFirst v-bind="$attrs" data-slot="pagination-first">
        <slot />
    </OriginalPaginationFirst>
</template>

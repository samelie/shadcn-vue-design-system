<script setup lang="ts">
import OriginalPaginationLast from "../../ui/pagination/PaginationLast.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPaginationLast v-bind="$attrs" data-slot="pagination-last">
        <slot />
    </OriginalPaginationLast>
</template>

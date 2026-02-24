<script setup lang="ts">
import OriginalTableHead from "../../ui/table/TableHead.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTableHead v-bind="$attrs" data-slot="table-head">
        <slot />
    </OriginalTableHead>
</template>

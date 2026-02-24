<script setup lang="ts">
import OriginalTableBody from "../../ui/table/TableBody.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTableBody v-bind="$attrs" data-slot="table-body">
        <slot />
    </OriginalTableBody>
</template>

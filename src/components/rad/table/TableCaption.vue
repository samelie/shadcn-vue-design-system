<script setup lang="ts">
import OriginalTableCaption from "../../ui/table/TableCaption.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTableCaption v-bind="$attrs" data-slot="table-caption">
        <slot />
    </OriginalTableCaption>
</template>

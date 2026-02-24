<script setup lang="ts">
import OriginalSelect from "../../ui/select/Select.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelect v-bind="$attrs" data-slot="select">
        <slot />
    </OriginalSelect>
</template>

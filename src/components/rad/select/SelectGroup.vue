<script setup lang="ts">
import OriginalSelectGroup from "../../ui/select/SelectGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSelectGroup v-bind="$attrs" data-slot="select-group">
        <slot />
    </OriginalSelectGroup>
</template>

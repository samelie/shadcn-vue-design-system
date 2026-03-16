<script setup lang="ts">
import OriginalButtonGroup from "../../ui/button-group/ButtonGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalButtonGroup v-bind="$attrs" data-slot="button-group">
        <slot />
    </OriginalButtonGroup>
</template>

<script setup lang="ts">
import OriginalInputGroup from "../../ui/input-group/InputGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalInputGroup v-bind="$attrs" data-slot="input-group">
        <slot />
    </OriginalInputGroup>
</template>

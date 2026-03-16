<script setup lang="ts">
import OriginalInputGroupInput from "../../ui/input-group/InputGroupInput.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalInputGroupInput v-bind="$attrs" data-slot="input-group-input">
        <slot />
    </OriginalInputGroupInput>
</template>

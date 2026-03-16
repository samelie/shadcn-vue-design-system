<script setup lang="ts">
import OriginalRadioGroup from "../../ui/radio-group/RadioGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalRadioGroup v-bind="$attrs" data-slot="radio-group">
        <slot />
    </OriginalRadioGroup>
</template>

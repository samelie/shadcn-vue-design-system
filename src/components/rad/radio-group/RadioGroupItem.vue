<script setup lang="ts">
import OriginalRadioGroupItem from "../../ui/radio-group/RadioGroupItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalRadioGroupItem v-bind="$attrs" data-slot="radio-group-item">
        <slot />
    </OriginalRadioGroupItem>
</template>

<script setup lang="ts">
import OriginalNativeSelectOption from "../../ui/native-select/NativeSelectOption.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNativeSelectOption v-bind="$attrs" data-slot="native-select-option">
        <slot />
    </OriginalNativeSelectOption>
</template>

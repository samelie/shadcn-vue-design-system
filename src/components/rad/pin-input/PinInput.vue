<script setup lang="ts">
import OriginalPinInput from "../../ui/pin-input/PinInput.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPinInput v-bind="$attrs" data-slot="pin-input">
        <slot />
    </OriginalPinInput>
</template>

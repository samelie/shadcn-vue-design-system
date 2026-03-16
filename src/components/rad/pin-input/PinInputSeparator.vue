<script setup lang="ts">
import OriginalPinInputSeparator from "../../ui/pin-input/PinInputSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPinInputSeparator v-bind="$attrs" data-slot="pin-input-separator">
        <slot />
    </OriginalPinInputSeparator>
</template>

<script setup lang="ts">
import OriginalPinInputGroup from "../../ui/pin-input/PinInputGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalPinInputGroup v-bind="$attrs" data-slot="pin-input-group">
        <slot />
    </OriginalPinInputGroup>
</template>

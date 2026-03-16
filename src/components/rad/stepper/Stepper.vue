<script setup lang="ts">
import OriginalStepper from "../../ui/stepper/Stepper.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalStepper v-bind="$attrs" data-slot="stepper">
        <slot />
    </OriginalStepper>
</template>

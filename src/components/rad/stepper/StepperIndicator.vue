<script setup lang="ts">
import OriginalStepperIndicator from "../../ui/stepper/StepperIndicator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalStepperIndicator v-bind="$attrs" data-slot="stepper-indicator">
        <slot />
    </OriginalStepperIndicator>
</template>

<script setup lang="ts">
import OriginalStepperSeparator from "../../ui/stepper/StepperSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalStepperSeparator v-bind="$attrs" data-slot="stepper-separator">
        <slot />
    </OriginalStepperSeparator>
</template>

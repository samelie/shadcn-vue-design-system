<script setup lang="ts">
import OriginalStepperDescription from "../../ui/stepper/StepperDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalStepperDescription v-bind="$attrs" data-slot="stepper-description">
        <slot />
    </OriginalStepperDescription>
</template>

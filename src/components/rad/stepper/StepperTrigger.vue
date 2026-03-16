<script setup lang="ts">
import OriginalStepperTrigger from "../../ui/stepper/StepperTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalStepperTrigger v-bind="$attrs" data-slot="stepper-trigger">
        <slot />
    </OriginalStepperTrigger>
</template>

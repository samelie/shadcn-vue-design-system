<script setup lang="ts">
import OriginalStepperTitle from "../../ui/stepper/StepperTitle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalStepperTitle v-bind="$attrs" data-slot="stepper-title">
        <slot />
    </OriginalStepperTitle>
</template>

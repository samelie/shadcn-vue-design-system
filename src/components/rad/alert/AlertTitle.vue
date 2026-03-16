<script setup lang="ts">
import OriginalAlertTitle from "../../ui/alert/AlertTitle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertTitle v-bind="$attrs" data-slot="alert-title">
        <slot />
    </OriginalAlertTitle>
</template>

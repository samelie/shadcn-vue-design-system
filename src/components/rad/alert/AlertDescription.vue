<script setup lang="ts">
import OriginalAlertDescription from "../../ui/alert/AlertDescription.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlertDescription v-bind="$attrs" data-slot="alert-description">
        <slot />
    </OriginalAlertDescription>
</template>

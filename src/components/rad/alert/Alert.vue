<script setup lang="ts">
import OriginalAlert from "../../ui/alert/Alert.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalAlert v-bind="$attrs" data-slot="alert">
        <slot />
    </OriginalAlert>
</template>

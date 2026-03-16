<script setup lang="ts">
import OriginalFormMessage from "../../ui/form/FormMessage.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFormMessage v-bind="$attrs" data-slot="form-message">
        <slot />
    </OriginalFormMessage>
</template>

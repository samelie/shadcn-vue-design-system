<script setup lang="ts">
import OriginalCardFooter from "../../ui/card/CardFooter.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCardFooter v-bind="$attrs" data-slot="card-footer">
        <slot />
    </OriginalCardFooter>
</template>

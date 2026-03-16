<script setup lang="ts">
import OriginalSeparator from "../../ui/separator/Separator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSeparator v-bind="$attrs" data-slot="separator">
        <slot />
    </OriginalSeparator>
</template>

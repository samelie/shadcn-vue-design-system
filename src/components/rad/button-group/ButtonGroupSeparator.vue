<script setup lang="ts">
import OriginalButtonGroupSeparator from "../../ui/button-group/ButtonGroupSeparator.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalButtonGroupSeparator v-bind="$attrs" data-slot="button-group-separator">
        <slot />
    </OriginalButtonGroupSeparator>
</template>

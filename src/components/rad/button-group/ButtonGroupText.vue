<script setup lang="ts">
import OriginalButtonGroupText from "../../ui/button-group/ButtonGroupText.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalButtonGroupText v-bind="$attrs" data-slot="button-group-text">
        <slot />
    </OriginalButtonGroupText>
</template>

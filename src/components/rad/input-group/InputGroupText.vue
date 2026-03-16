<script setup lang="ts">
import OriginalInputGroupText from "../../ui/input-group/InputGroupText.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalInputGroupText v-bind="$attrs" data-slot="input-group-text">
        <slot />
    </OriginalInputGroupText>
</template>

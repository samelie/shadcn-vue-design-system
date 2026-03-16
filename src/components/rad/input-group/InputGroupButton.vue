<script setup lang="ts">
import OriginalInputGroupButton from "../../ui/input-group/InputGroupButton.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalInputGroupButton v-bind="$attrs" data-slot="input-group-button">
        <slot />
    </OriginalInputGroupButton>
</template>

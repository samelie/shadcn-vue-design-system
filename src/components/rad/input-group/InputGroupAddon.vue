<script setup lang="ts">
import OriginalInputGroupAddon from "../../ui/input-group/InputGroupAddon.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalInputGroupAddon v-bind="$attrs" data-slot="input-group-addon">
        <slot />
    </OriginalInputGroupAddon>
</template>

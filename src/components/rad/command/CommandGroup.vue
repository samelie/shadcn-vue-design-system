<script setup lang="ts">
import OriginalCommandGroup from "../../ui/command/CommandGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCommandGroup v-bind="$attrs" data-slot="command-group">
        <slot />
    </OriginalCommandGroup>
</template>

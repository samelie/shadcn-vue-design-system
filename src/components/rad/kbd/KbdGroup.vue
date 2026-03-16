<script setup lang="ts">
import OriginalKbdGroup from "../../ui/kbd/KbdGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalKbdGroup v-bind="$attrs" data-slot="kbd-group">
        <slot />
    </OriginalKbdGroup>
</template>

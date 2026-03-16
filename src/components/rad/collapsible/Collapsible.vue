<script setup lang="ts">
import OriginalCollapsible from "../../ui/collapsible/Collapsible.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCollapsible v-bind="$attrs" data-slot="collapsible">
        <slot />
    </OriginalCollapsible>
</template>

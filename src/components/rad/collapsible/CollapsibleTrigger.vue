<script setup lang="ts">
import OriginalCollapsibleTrigger from "../../ui/collapsible/CollapsibleTrigger.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCollapsibleTrigger v-bind="$attrs" data-slot="collapsible-trigger">
        <slot />
    </OriginalCollapsibleTrigger>
</template>

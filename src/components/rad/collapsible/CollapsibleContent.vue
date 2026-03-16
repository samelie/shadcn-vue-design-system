<script setup lang="ts">
import OriginalCollapsibleContent from "../../ui/collapsible/CollapsibleContent.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCollapsibleContent v-bind="$attrs" data-slot="collapsible-content">
        <slot />
    </OriginalCollapsibleContent>
</template>

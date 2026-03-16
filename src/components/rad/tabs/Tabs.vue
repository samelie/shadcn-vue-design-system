<script setup lang="ts">
import OriginalTabs from "../../ui/tabs/Tabs.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTabs v-bind="$attrs" data-slot="tabs">
        <slot />
    </OriginalTabs>
</template>

<script setup lang="ts">
import OriginalTabsList from "../../ui/tabs/TabsList.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTabsList v-bind="$attrs" data-slot="tabs-list">
        <slot />
    </OriginalTabsList>
</template>

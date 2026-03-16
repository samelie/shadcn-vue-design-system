<script setup lang="ts">
import OriginalEmpty from "../../ui/empty/Empty.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalEmpty v-bind="$attrs" data-slot="empty">
        <slot />
    </OriginalEmpty>
</template>

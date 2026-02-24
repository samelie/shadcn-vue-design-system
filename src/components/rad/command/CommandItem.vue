<script setup lang="ts">
import type { ComboboxItemProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import OriginalCommandItem from "../../ui/command/CommandItem.vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
    <OriginalCommandItem v-bind="props" data-slot="command-item">
        <slot />
    </OriginalCommandItem>
</template>

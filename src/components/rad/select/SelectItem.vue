<script setup lang="ts">
import type { SelectItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import OriginalSelectItem from "../../ui/select/SelectItem.vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<SelectItemProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
    <OriginalSelectItem v-bind="props" data-slot="select-item">
        <slot />
        <template #indicator-icon>
            <slot name="indicator-icon" />
        </template>
    </OriginalSelectItem>
</template>

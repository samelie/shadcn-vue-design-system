<script setup lang="ts">
import type { DropdownMenuRadioItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import OriginalDropdownMenuRadioItem from "../../ui/dropdown-menu/DropdownMenuRadioItem.vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
    <OriginalDropdownMenuRadioItem v-bind="props" data-slot="dropdown-menu-radio-item">
        <slot />
        <template #indicator-icon>
            <slot name="indicator-icon" />
        </template>
    </OriginalDropdownMenuRadioItem>
</template>

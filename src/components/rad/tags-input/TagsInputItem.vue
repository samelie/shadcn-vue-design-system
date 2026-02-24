<script setup lang="ts">
import type { TagsInputItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import OriginalTagsInputItem from "../../ui/tags-input/TagsInputItem.vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
    <OriginalTagsInputItem v-bind="props" data-slot="tags-input-item">
        <slot />
    </OriginalTagsInputItem>
</template>

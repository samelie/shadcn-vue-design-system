<script setup lang="ts">
import type { TagsInputItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import OriginalTagsInputItem from '../../ui/tags-input/TagsInputItem.vue'

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTagsInputItem v-bind="props">
    <slot />
  </OriginalTagsInputItem>
</template>

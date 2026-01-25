<script setup lang="ts">
import OriginalTagsInputItemDelete from '../../ui/tags-input/TagsInputItemDelete.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTagsInputItemDelete v-bind="$attrs">
    <slot />
  </OriginalTagsInputItemDelete>
</template>

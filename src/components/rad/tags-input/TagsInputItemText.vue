<script setup lang="ts">
import OriginalTagsInputItemText from '../../ui/tags-input/TagsInputItemText.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTagsInputItemText v-bind="$attrs" data-slot="tags-input-item-text" />
</template>

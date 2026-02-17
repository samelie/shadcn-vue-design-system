<script setup lang="ts">
import OriginalTagsInputInput from '../../ui/tags-input/TagsInputInput.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTagsInputInput v-bind="$attrs" data-slot="tags-input-input" />
</template>

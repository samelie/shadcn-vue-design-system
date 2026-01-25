<script setup lang="ts">
import OriginalTagsInput from '../../ui/tags-input/TagsInput.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTagsInput v-bind="$attrs">
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </OriginalTagsInput>
</template>

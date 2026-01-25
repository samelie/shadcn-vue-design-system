<script setup lang="ts">
import OriginalToggleGroup from '../../ui/toggle-group/ToggleGroup.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalToggleGroup v-bind="$attrs">
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </OriginalToggleGroup>
</template>

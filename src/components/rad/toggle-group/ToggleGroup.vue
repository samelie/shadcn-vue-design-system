<script setup lang="ts">
import OriginalToggleGroup from '../../ui/toggle-group/ToggleGroup.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalToggleGroup v-bind="$attrs" data-slot="toggle-group">
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </OriginalToggleGroup>
</template>

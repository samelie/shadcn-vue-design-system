<script setup lang="ts">
import OriginalDropdownMenuCheckboxItem from '../../ui/dropdown-menu/DropdownMenuCheckboxItem.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuCheckboxItem v-bind="$attrs">
    <slot />
    <template #indicator-icon>
      <slot name="indicator-icon" />
    </template>
  </OriginalDropdownMenuCheckboxItem>
</template>

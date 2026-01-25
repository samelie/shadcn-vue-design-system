<script setup lang="ts">
import OriginalDropdownMenuGroup from '../../ui/dropdown-menu/DropdownMenuGroup.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuGroup v-bind="$attrs">
    <slot />
  </OriginalDropdownMenuGroup>
</template>

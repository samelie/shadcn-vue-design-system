<script setup lang="ts">
import OriginalDropdownMenuItem from '../../ui/dropdown-menu/DropdownMenuItem.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuItem v-bind="$attrs">
    <slot />
  </OriginalDropdownMenuItem>
</template>

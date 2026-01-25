<script setup lang="ts">
import OriginalDropdownMenuSubContent from '../../ui/dropdown-menu/DropdownMenuSubContent.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuSubContent v-bind="$attrs">
    <slot />
  </OriginalDropdownMenuSubContent>
</template>

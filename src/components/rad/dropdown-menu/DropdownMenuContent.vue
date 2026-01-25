<script setup lang="ts">
import OriginalDropdownMenuContent from '../../ui/dropdown-menu/DropdownMenuContent.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuContent v-bind="$attrs">
    <slot />
  </OriginalDropdownMenuContent>
</template>

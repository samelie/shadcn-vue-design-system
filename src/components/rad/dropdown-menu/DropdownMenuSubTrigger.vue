<script setup lang="ts">
import OriginalDropdownMenuSubTrigger from '../../ui/dropdown-menu/DropdownMenuSubTrigger.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuSubTrigger v-bind="$attrs">
    <slot />
  </OriginalDropdownMenuSubTrigger>
</template>

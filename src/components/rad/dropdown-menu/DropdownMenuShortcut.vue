<script setup lang="ts">
import OriginalDropdownMenuShortcut from '../../ui/dropdown-menu/DropdownMenuShortcut.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuShortcut v-bind="$attrs">
    <slot />
  </OriginalDropdownMenuShortcut>
</template>

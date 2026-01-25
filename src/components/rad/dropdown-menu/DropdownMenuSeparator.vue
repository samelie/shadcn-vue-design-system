<script setup lang="ts">
import OriginalDropdownMenuSeparator from '../../ui/dropdown-menu/DropdownMenuSeparator.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuSeparator v-bind="$attrs" />
</template>

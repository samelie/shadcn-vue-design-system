<script setup lang="ts">
import OriginalDropdownMenuTrigger from '../../ui/dropdown-menu/DropdownMenuTrigger.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuTrigger v-bind="$attrs" data-slot="dropdown-menu-trigger">
    <slot />
  </OriginalDropdownMenuTrigger>
</template>

<script setup lang="ts">
import OriginalDropdownMenuSub from '../../ui/dropdown-menu/DropdownMenuSub.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuSub v-bind="$attrs">
    <slot />
  </OriginalDropdownMenuSub>
</template>

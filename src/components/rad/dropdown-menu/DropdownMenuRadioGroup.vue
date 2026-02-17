<script setup lang="ts">
import OriginalDropdownMenuRadioGroup from '../../ui/dropdown-menu/DropdownMenuRadioGroup.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuRadioGroup v-bind="$attrs" data-slot="dropdown-menu-radio-group">
    <slot />
  </OriginalDropdownMenuRadioGroup>
</template>

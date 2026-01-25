<script setup lang="ts">
import OriginalPopoverContent from '../../ui/popover/PopoverContent.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalPopoverContent v-bind="$attrs">
    <slot />
  </OriginalPopoverContent>
</template>

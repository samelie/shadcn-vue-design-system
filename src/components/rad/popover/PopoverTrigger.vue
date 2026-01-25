<script setup lang="ts">
import OriginalPopoverTrigger from '../../ui/popover/PopoverTrigger.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalPopoverTrigger v-bind="$attrs">
    <slot />
  </OriginalPopoverTrigger>
</template>

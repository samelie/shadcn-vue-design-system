<script setup lang="ts">
import OriginalPopoverTrigger from '../../ui/popover/PopoverTrigger.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalPopoverTrigger v-bind="$attrs" data-slot="popover-trigger">
    <slot />
  </OriginalPopoverTrigger>
</template>

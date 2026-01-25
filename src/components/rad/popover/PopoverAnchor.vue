<script setup lang="ts">
import OriginalPopoverAnchor from '../../ui/popover/PopoverAnchor.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalPopoverAnchor v-bind="$attrs">
    <slot />
  </OriginalPopoverAnchor>
</template>

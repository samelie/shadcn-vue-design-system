<script setup lang="ts">
import OriginalPopover from '../../ui/popover/Popover.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalPopover v-bind="$attrs">
    <slot />
  </OriginalPopover>
</template>

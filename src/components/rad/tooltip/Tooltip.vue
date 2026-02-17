<script setup lang="ts">
import OriginalTooltip from '../../ui/tooltip/Tooltip.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTooltip v-bind="$attrs" data-slot="tooltip">
    <slot />
  </OriginalTooltip>
</template>

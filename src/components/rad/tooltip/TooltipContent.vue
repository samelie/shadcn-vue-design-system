<script setup lang="ts">
import OriginalTooltipContent from '../../ui/tooltip/TooltipContent.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTooltipContent v-bind="$attrs">
    <slot />
  </OriginalTooltipContent>
</template>

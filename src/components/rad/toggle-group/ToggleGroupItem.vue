<script setup lang="ts">
import type { ToggleGroupItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { VariantProps } from 'class-variance-authority'
import type { toggleVariants } from '../../ui/toggle'
import OriginalToggleGroupItem from '../../ui/toggle-group/ToggleGroupItem.vue'

type ToggleGroupVariants = VariantProps<typeof toggleVariants>

const props = defineProps<ToggleGroupItemProps & {
  class?: HTMLAttributes['class']
  variant?: ToggleGroupVariants['variant']
  size?: ToggleGroupVariants['size']
}>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalToggleGroupItem v-bind="props" data-slot="toggle-group-item">
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </OriginalToggleGroupItem>
</template>

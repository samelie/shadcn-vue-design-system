<script setup lang="ts">
import type { DropdownMenuRadioItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import OriginalDropdownMenuRadioItem from '../../ui/dropdown-menu/DropdownMenuRadioItem.vue'

const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDropdownMenuRadioItem v-bind="props">
    <slot />
    <template #indicator-icon>
      <slot name="indicator-icon" />
    </template>
  </OriginalDropdownMenuRadioItem>
</template>

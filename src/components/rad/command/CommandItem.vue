<script setup lang="ts">
import type { ComboboxItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import OriginalCommandItem from '../../ui/command/CommandItem.vue'

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes['class'] }>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCommandItem v-bind="props">
    <slot />
  </OriginalCommandItem>
</template>

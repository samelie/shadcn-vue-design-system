<script setup lang="ts">
import type { AccordionItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import OriginalAccordionItem from '../../ui/accordion/AccordionItem.vue'

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalAccordionItem v-bind="props" data-slot="accordion-item">
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </OriginalAccordionItem>
</template>

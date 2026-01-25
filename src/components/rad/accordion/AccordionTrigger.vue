<script setup lang="ts">
import OriginalAccordionTrigger from '../../ui/accordion/AccordionTrigger.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalAccordionTrigger v-bind="$attrs">
    <slot />
    <template #icon>
      <slot name="icon" />
    </template>
  </OriginalAccordionTrigger>
</template>

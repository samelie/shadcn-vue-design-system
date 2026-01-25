<script setup lang="ts">
import OriginalAccordionContent from '../../ui/accordion/AccordionContent.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalAccordionContent v-bind="$attrs">
    <slot />
  </OriginalAccordionContent>
</template>

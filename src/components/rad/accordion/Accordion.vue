<script setup lang="ts">
import OriginalAccordion from '../../ui/accordion/Accordion.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalAccordion v-bind="$attrs" data-slot="accordion">
    <template #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </OriginalAccordion>
</template>

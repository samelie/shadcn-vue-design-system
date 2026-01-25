<script setup lang="ts">
import OriginalTableHeader from '../../ui/table/TableHeader.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTableHeader v-bind="$attrs">
    <slot />
  </OriginalTableHeader>
</template>

<script setup lang="ts">
import OriginalTable from '../../ui/table/Table.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTable v-bind="$attrs">
    <slot />
  </OriginalTable>
</template>

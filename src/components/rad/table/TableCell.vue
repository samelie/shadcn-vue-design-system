<script setup lang="ts">
import OriginalTableCell from '../../ui/table/TableCell.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTableCell v-bind="$attrs" data-slot="table-cell">
    <slot />
  </OriginalTableCell>
</template>

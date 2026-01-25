<script setup lang="ts">
import OriginalTableRow from '../../ui/table/TableRow.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTableRow v-bind="$attrs">
    <slot />
  </OriginalTableRow>
</template>

<script setup lang="ts">
import OriginalTableBody from '../../ui/table/TableBody.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTableBody v-bind="$attrs">
    <slot />
  </OriginalTableBody>
</template>

<script setup lang="ts">
import OriginalTableFooter from '../../ui/table/TableFooter.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTableFooter v-bind="$attrs">
    <slot />
  </OriginalTableFooter>
</template>

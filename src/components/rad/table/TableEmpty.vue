<script setup lang="ts">
import OriginalTableEmpty from '../../ui/table/TableEmpty.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTableEmpty v-bind="$attrs" data-slot="table-empty">
    <slot />
  </OriginalTableEmpty>
</template>

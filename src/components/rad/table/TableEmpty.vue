<script setup lang="ts">
import OriginalTableEmpty from '../../ui/table/TableEmpty.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTableEmpty v-bind="$attrs">
    <slot />
  </OriginalTableEmpty>
</template>

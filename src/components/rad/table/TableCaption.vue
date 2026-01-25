<script setup lang="ts">
import OriginalTableCaption from '../../ui/table/TableCaption.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalTableCaption v-bind="$attrs">
    <slot />
  </OriginalTableCaption>
</template>

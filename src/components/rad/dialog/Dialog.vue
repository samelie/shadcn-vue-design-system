<script setup lang="ts">
import OriginalDialog from '../../ui/dialog/Dialog.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDialog v-bind="$attrs">
    <slot />
  </OriginalDialog>
</template>

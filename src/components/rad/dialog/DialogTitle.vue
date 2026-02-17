<script setup lang="ts">
import OriginalDialogTitle from '../../ui/dialog/DialogTitle.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDialogTitle v-bind="$attrs" data-slot="dialog-title">
    <slot />
  </OriginalDialogTitle>
</template>

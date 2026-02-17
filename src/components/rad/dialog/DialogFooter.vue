<script setup lang="ts">
import OriginalDialogFooter from '../../ui/dialog/DialogFooter.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDialogFooter v-bind="$attrs" data-slot="dialog-footer">
    <slot />
  </OriginalDialogFooter>
</template>

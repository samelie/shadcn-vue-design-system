<script setup lang="ts">
import OriginalDialogClose from '../../ui/dialog/DialogClose.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDialogClose v-bind="$attrs" data-slot="dialog-close">
    <slot />
  </OriginalDialogClose>
</template>

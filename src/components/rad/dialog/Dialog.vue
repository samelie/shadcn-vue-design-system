<script setup lang="ts">
import OriginalDialog from '../../ui/dialog/Dialog.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDialog v-bind="$attrs" data-slot="dialog">
    <slot />
  </OriginalDialog>
</template>

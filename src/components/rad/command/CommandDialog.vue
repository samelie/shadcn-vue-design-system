<script setup lang="ts">
import OriginalCommandDialog from '../../ui/command/CommandDialog.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCommandDialog v-bind="$attrs">
    <slot />
  </OriginalCommandDialog>
</template>

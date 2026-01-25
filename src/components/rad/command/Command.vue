<script setup lang="ts">
import OriginalCommand from '../../ui/command/Command.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCommand v-bind="$attrs">
    <slot />
  </OriginalCommand>
</template>

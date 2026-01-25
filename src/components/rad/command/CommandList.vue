<script setup lang="ts">
import OriginalCommandList from '../../ui/command/CommandList.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCommandList v-bind="$attrs">
    <slot />
  </OriginalCommandList>
</template>

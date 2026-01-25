<script setup lang="ts">
import OriginalCommandEmpty from '../../ui/command/CommandEmpty.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCommandEmpty v-bind="$attrs">
    <slot />
  </OriginalCommandEmpty>
</template>

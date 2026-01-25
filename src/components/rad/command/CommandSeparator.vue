<script setup lang="ts">
import OriginalCommandSeparator from '../../ui/command/CommandSeparator.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCommandSeparator v-bind="$attrs" />
</template>

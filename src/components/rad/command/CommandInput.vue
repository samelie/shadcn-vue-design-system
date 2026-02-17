<script setup lang="ts">
import OriginalCommandInput from '../../ui/command/CommandInput.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCommandInput v-bind="$attrs" data-slot="command-input" />
</template>

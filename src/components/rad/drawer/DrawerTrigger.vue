<script setup lang="ts">
import OriginalDrawerTrigger from '../../ui/drawer/DrawerTrigger.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDrawerTrigger v-bind="$attrs">
    <slot />
  </OriginalDrawerTrigger>
</template>

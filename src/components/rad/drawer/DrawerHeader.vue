<script setup lang="ts">
import OriginalDrawerHeader from '../../ui/drawer/DrawerHeader.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDrawerHeader v-bind="$attrs">
    <slot />
  </OriginalDrawerHeader>
</template>

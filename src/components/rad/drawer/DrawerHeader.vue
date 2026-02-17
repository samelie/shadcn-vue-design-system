<script setup lang="ts">
import OriginalDrawerHeader from '../../ui/drawer/DrawerHeader.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDrawerHeader v-bind="$attrs" data-slot="drawer-header">
    <slot />
  </OriginalDrawerHeader>
</template>

<script setup lang="ts">
import OriginalDrawerDescription from '../../ui/drawer/DrawerDescription.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDrawerDescription v-bind="$attrs">
    <slot />
  </OriginalDrawerDescription>
</template>

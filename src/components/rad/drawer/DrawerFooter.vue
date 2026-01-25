<script setup lang="ts">
import OriginalDrawerFooter from '../../ui/drawer/DrawerFooter.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDrawerFooter v-bind="$attrs">
    <slot />
  </OriginalDrawerFooter>
</template>

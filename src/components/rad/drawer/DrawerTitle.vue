<script setup lang="ts">
import OriginalDrawerTitle from '../../ui/drawer/DrawerTitle.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDrawerTitle v-bind="$attrs">
    <slot />
  </OriginalDrawerTitle>
</template>

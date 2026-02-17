<script setup lang="ts">
import OriginalDrawer from '../../ui/drawer/Drawer.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDrawer v-bind="$attrs" data-slot="drawer">
    <slot />
  </OriginalDrawer>
</template>

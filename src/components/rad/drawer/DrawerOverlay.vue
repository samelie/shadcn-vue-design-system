<script setup lang="ts">
import OriginalDrawerOverlay from '../../ui/drawer/DrawerOverlay.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalDrawerOverlay v-bind="$attrs" data-slot="drawer-overlay" />
</template>

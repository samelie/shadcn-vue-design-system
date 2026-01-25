<script setup lang="ts">
import OriginalButton from '../../ui/button/Button.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </OriginalButton>
</template>

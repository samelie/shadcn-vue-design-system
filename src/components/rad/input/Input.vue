<script setup lang="ts">
import OriginalInput from '../../ui/input/Input.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalInput v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </OriginalInput>
</template>

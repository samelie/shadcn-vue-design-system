<script setup lang="ts">
import OriginalCheckbox from '../../ui/checkbox/Checkbox.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalCheckbox v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </OriginalCheckbox>
</template>

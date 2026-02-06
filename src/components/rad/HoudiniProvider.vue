<script setup lang="ts">
import { provide, watchEffect } from "vue";
import { applyHoudiniClass, useHoudini } from "~/composables";
import type { HoudiniState } from "~/composables";

const props = withDefaults(
  defineProps<{
    /** Auto-initialize worklets on mount (default: true) */
    autoInit?: boolean
    /** Apply .houdini-supported class to <html> (default: true) */
    applyClass?: boolean
  }>(),
  {
    autoInit: true,
    applyClass: true,
  }
)

const houdini = useHoudini(props.autoInit)

// Provide to descendants
provide<HoudiniState>('houdini', houdini)

// Toggle class on document element
watchEffect(() => {
  if (props.applyClass) {
    applyHoudiniClass(houdini.supported.value && houdini.initialized.value)
  }
})
</script>

<template>
  <slot />
</template>

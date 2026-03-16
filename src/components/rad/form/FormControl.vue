<script setup lang="ts">
import OriginalFormControl from "../../ui/form/FormControl.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFormControl v-bind="$attrs" data-slot="form-control">
        <slot />
    </OriginalFormControl>
</template>

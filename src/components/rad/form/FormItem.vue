<script setup lang="ts">
import OriginalFormItem from "../../ui/form/FormItem.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalFormItem v-bind="$attrs" data-slot="form-item">
        <slot />
    </OriginalFormItem>
</template>

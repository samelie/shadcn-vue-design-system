<script setup lang="ts">
import OriginalNativeSelectOptGroup from "../../ui/native-select/NativeSelectOptGroup.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNativeSelectOptGroup v-bind="$attrs" data-slot="native-select-opt-group">
        <slot />
    </OriginalNativeSelectOptGroup>
</template>

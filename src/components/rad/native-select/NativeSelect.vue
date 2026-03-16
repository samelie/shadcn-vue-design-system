<script setup lang="ts">
import OriginalNativeSelect from "../../ui/native-select/NativeSelect.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalNativeSelect v-bind="$attrs" data-slot="native-select">
        <slot />
    </OriginalNativeSelect>
</template>

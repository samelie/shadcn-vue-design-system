<script setup lang="ts">
import OriginalInputGroupTextarea from "../../ui/input-group/InputGroupTextarea.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalInputGroupTextarea v-bind="$attrs" data-slot="input-group-textarea">
        <slot />
    </OriginalInputGroupTextarea>
</template>

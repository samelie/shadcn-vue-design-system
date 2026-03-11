<script setup lang="ts">
import OriginalTextarea from "../../ui/textarea/Textarea.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTextarea v-bind="$attrs">
        <template v-for="(_, name) in $slots" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps ?? {}" />
        </template>
    </OriginalTextarea>
</template>

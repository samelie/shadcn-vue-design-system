<script setup lang="ts">
import OriginalTagsInput from "../../ui/tags-input/TagsInput.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalTagsInput v-bind="$attrs" data-slot="tags-input">
        <template #default="slotProps">
            <slot v-bind="slotProps" />
        </template>
    </OriginalTagsInput>
</template>

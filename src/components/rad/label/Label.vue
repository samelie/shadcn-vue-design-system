<script setup lang="ts">
import OriginalLabel from "../../ui/label/Label.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalLabel v-bind="$attrs" data-slot="label">
        <template v-for="(_, name) in $slots" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps ?? {}" />
        </template>
    </OriginalLabel>
</template>

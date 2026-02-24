<script setup lang="ts">
import OriginalToggle from "../../ui/toggle/Toggle.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalToggle v-bind="$attrs" data-slot="toggle">
        <template v-for="(_, name) in $slots" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps ?? {}" />
        </template>
    </OriginalToggle>
</template>

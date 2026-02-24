<script setup lang="ts">
import OriginalSwitch from "../../ui/switch/Switch.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalSwitch v-bind="$attrs" data-slot="switch">
        <template v-for="(_, name) in $slots" #[name]="slotProps">
            <slot :name="name" v-bind="slotProps ?? {}" />
        </template>
    </OriginalSwitch>
</template>

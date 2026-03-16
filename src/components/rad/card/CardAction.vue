<script setup lang="ts">
import OriginalCardAction from "../../ui/card/CardAction.vue";

defineOptions({ inheritAttrs: false });
</script>

<template>
    <OriginalCardAction v-bind="$attrs" data-slot="card-action">
        <slot />
    </OriginalCardAction>
</template>
